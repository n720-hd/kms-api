import { prisma } from "connection";

export const createGlobalMessageService = async (content: string, userId: number, messageType: string = 'text', replyToId?: number) => {
    const message = await prisma.chatMessage.create({
        data: {
            content,
            user_id: userId,
            message_type: messageType,
            reply_to_id: replyToId || null,
        },
        include: {
            user: {
                select: {
                    user_id: true,
                    first_name: true,
                    last_name: true,
                    username: true,
                    profile_picture: true,
                }
            },
            reply_to: {
                include: {
                    user: {
                        select: {
                            user_id: true,
                            first_name: true,
                            last_name: true,
                            username: true,
                        }
                    }
                }
            }
        }
    });

    return message;
};

export const getGlobalMessageHistoryService = async (limit: number = 50, offset: number = 0) => {
    const messages = await prisma.chatMessage.findMany({
        where: {
            deleted_at: null,
        },
        include: {
            user: {
                select: {
                    user_id: true,
                    first_name: true,
                    last_name: true,
                    username: true,
                    profile_picture: true,
                }
            },
            reply_to: {
                include: {
                    user: {
                        select: {
                            user_id: true,
                            first_name: true,
                            last_name: true,
                            username: true,
                        }
                    }
                }
            }
        },
        orderBy: {
            created_at: 'desc'
        },
        take: limit,
        skip: offset,
    });

    const totalCount = await prisma.chatMessage.count({
        where: {
            deleted_at: null,
        }
    });

    return {
        messages: messages.reverse(), // Reverse to show oldest first
        totalCount,
        hasMore: offset + limit < totalCount
    };
};

export const editMessageService = async (messageId: number, userId: number, newContent: string) => {
    const message = await prisma.chatMessage.findFirst({
        where: {
            message_id: messageId,
            user_id: userId,
            deleted_at: null,
        }
    });

    if (!message) throw {msg: 'Message not found or unauthorized', status: 404};

    const updatedMessage = await prisma.chatMessage.update({
        where: {
            message_id: messageId,
        },
        data: {
            content: newContent,
        },
        include: {
            user: {
                select: {
                    user_id: true,
                    first_name: true,
                    last_name: true,
                    username: true,
                    profile_picture: true,
                }
            }
        }
    });

    return updatedMessage;
};

export const deleteMessageService = async (messageId: number, userId: number) => {
    const message = await prisma.chatMessage.findFirst({
        where: {
            message_id: messageId,
            user_id: userId,
            deleted_at: null,
        }
    });

    if (!message) throw {msg: 'Message not found or unauthorized', status: 404};

    await prisma.chatMessage.update({
        where: {
            message_id: messageId,
        },
        data: {
            deleted_at: new Date(),
        }
    });
};