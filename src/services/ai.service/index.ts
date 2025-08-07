import {prisma} from 'connection';
import axios from 'axios';
import { generateConversationTitle } from '@/utils/ai';

export const chatAiService = async({prompt, usersId, aiModel, conversationId, io, socketId}:{prompt: string, usersId: number, aiModel: string, conversationId: number | null, io?: any, socketId?: string}) => {
   try {
     const isUser = await prisma.user.findUnique({
        where: {user_id: usersId}
    })
    if(!isUser) throw {msg: 'Please log-in in order to be able to access the AI', status: 406};
    
    if(!prompt || prompt.trim().length === 0 ) throw {msg: 'Prompt cannot be empty', status: 406};
    if(prompt.length > 4000) throw {msg: 'Prompt is too long', status: 406}

    const validAiModel = ['qwen/qwen3-235b-a22b:free', 'deepseek/deepseek-r1-0528:free']
    const openrouter_secret = process.env.OPENROUTER_API_KEY
    if(!validAiModel.includes(aiModel)) throw {msg: 'Invalid model selected', status: 400};

    let currentConversation
    if(conversationId){
        currentConversation = await prisma.conversation.findFirst({where: {conversation_id: conversationId}})
        if(!currentConversation) throw {msg: 'Invalid Conversation', status: 404}
    }else{
        currentConversation = await prisma.conversation.create({data: {user_id: usersId, title: generateConversationTitle(prompt) }})
    }

    const previousMessage = await prisma.conversationMessage.findMany({where: {conversation_id: currentConversation?.conversation_id, deleted_at: null},take: 20});

    const message = [];
    
    if(!previousMessage){
        message.push({
            role: 'system',
            message: 'You are an AI Assistant in a knowledge exchange web application like stack-overflow, but the topics could be broader than it, it could be finance and business also else it would be invalid and you should not answer it'
        })
    }

    previousMessage.forEach(msg => {
            if (msg.prompt) {
                message.push({
                    role: "user",
                    content: msg.prompt
                });
            }
            if (msg.response) {
                message.push({
                    role: "assistant", 
                    content: msg.response
                });
            }
        });

        message.push({
            role: "user",
            content: prompt.trim()
        });

    if(!openrouter_secret) throw {msg: 'AI Configuration error', status: 500};

    interface OpenRouterResponse {
        choices: {
            message: {
                content: string;
            }
        }[];
    }

    const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
        model: aiModel,
        messages: message,
        max_tokens: 2500,
        temperature: 0.7,
        stream: true
    }, {
        headers: {
            Authorization: `Bearer ${openrouter_secret}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': process.env.SITE_URL || 'http://localhost:3000',
            'X-Title': process.env.APP_NAME || 'Knowledge Exchange'
        },
        timeout: 30000,
        responseType: 'stream'
    });

    let fullResponse = '';
    
    return new Promise((resolve, reject) => {
        (response.data as any).on('data', (chunk: Buffer) => {
            const lines = chunk.toString().split('\n').filter(line => line.trim() !== '');
            
            for (const line of lines) {
                if (line.includes('data: ')) {
                    const data = line.replace('data: ', '');
                    if (data === '[DONE]') {
                        return;
                    }
                    
                    try {
                        const parsed = JSON.parse(data);
                        const content = parsed.choices?.[0]?.delta?.content;
                        if (content) {
                            fullResponse += content;
                            console.log('Streaming content:', content); // Debug log
                            if (io && socketId) {
                                io.to(socketId).emit('ai-chunk', { content });
                                console.log('Emitted chunk to socket:', socketId); // Debug log
                            }
                        }
                    } catch (parseError) {
                        console.error('Parse error:', parseError);
                    }
                }
            }
        });

        (response.data as any).on('end', async () => {
            try {
                const savedResponse = await prisma.conversationMessage.create({
                    data: {
                        user_id: usersId,
                        conversation_id: currentConversation?.conversation_id as number,
                        prompt: prompt.trim(),
                        response: fullResponse,
                        created_at: new Date(),
                        ai_model: aiModel
                    }
                });

                const result = {
                    message_id: savedResponse.message_id,
                    conversationId: currentConversation?.conversation_id,
                    aiResponse: fullResponse,
                    conversationTitle: currentConversation?.title,
                };

                if (io && socketId) {
                    io.to(socketId).emit('ai-complete', result);
                }
                
                resolve(result);
            } catch (error) {
                if (io && socketId) {
                    io.to(socketId).emit('ai-error', { error: 'Failed to save response' });
                }
                reject(error);
            }
        });

        (response.data as any).on('error', (error: any) => {
            if (io && socketId) {
                io.to(socketId).emit('ai-error', { error: error.message });
            }
            reject(error);
        });
    });

   } catch (error) {
        
   }
}

export const getAiConversationService = async({usersId, conversationId}: {usersId: number, conversationId: number}) => {
    if(!usersId) throw {msg: 'Please log-in first', status: 406}
    if(!conversationId) throw {msg: 'Invalid conversation', status: 404}
    const isUser = await prisma.user.findUnique({where: {user_id: usersId}})
    if(!isUser) throw {msg: 'Please log-in first', status: 406}

    const conversation = await prisma.conversation.findUnique({
        where: {
            conversation_id: conversationId,
            user_id: usersId,
            deleted_at: null
        },
        include: {
            ConversationMessage: {
                where: {deleted_at: null},
                orderBy: {
                    created_at: 'asc'
                }
            }
        }
    })

    if(!conversation) throw {msg: 'Invalid conversation', status: 404};

    return conversation
}

export const getAiConversationListService = async({usersId}: {usersId: number}) => {
    return await prisma.conversation.findMany({
        where: {
            user_id: usersId,
            deleted_at: null
        }
    })
}

export const deleteConversationService = async({usersId, conversationId}:{usersId: number, conversationId: number}) => {
    const isUser = await prisma.user.findUnique({
        where: {
            user_id: usersId
        }
    })

    if(!isUser) throw {msg: 'Please log-in first', status: 406}

    await prisma.conversation.update({
        where: {
            user_id: usersId,
            conversation_id: conversationId
        },
        data: {
            deleted_at: new Date()
        }
    })

    await prisma.conversationMessage.updateMany({
        where: {
            user_id: usersId,
            conversation_id: conversationId
        },
        data: {
            deleted_at: new Date()
        }
    })
}