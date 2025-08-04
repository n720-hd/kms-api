import { Server as SocketIOServer, Socket } from 'socket.io';
import { chatAiService } from '../services/ai.service';
import { createGlobalMessageService } from '../services/chat.service';
import { verifyToken } from '../utils/jwt';

export const setupWebSocketHandlers = (io: SocketIOServer) => {
  io.use((socket, next) => {
    const token = socket.handshake.headers.cookie?.split('token=')[1]?.split(';')[0];
    
    if (!token) {
      return next(new Error('No token provided'));
    }
    
    const decoded = verifyToken(token) as any;
    if (!decoded || !decoded.id) {
      return next(new Error('Invalid token'));
    }
    
    (socket as any).userId = decoded.id;
    next();
  });

  io.on('connection', (socket: Socket) => {
    console.log('User connected:', socket.id, 'User ID:', (socket as any).userId);

    socket.on('ai-chat', async (data) => {
      console.log('Received ai-chat request:', data);
      
      try {
        await chatAiService({
          prompt: data.prompt,
          usersId: (socket as any).userId,
          aiModel: data.aiModel,
          conversationId: data.conversationId,
          io: io,
          socketId: socket.id
        });
      } catch (error: any) {
        console.error('AI chat error:', error);
        socket.emit('ai-error', { error: error.msg || 'Failed to process AI request' });
      }
    });

    // Global Chat Events
    socket.on('send-global-message', async (data) => {
      console.log('Received global message:', data);
      
      try {
        const message = await createGlobalMessageService(
          data.content,
          (socket as any).userId,
          data.messageType || 'text',
          data.replyToId
        );

        // Broadcast to all connected users
        io.emit('new-global-message', message);
      } catch (error: any) {
        console.error('Global chat error:', error);
        socket.emit('chat-error', { error: error.message || 'Failed to send message' });
      }
    });

    socket.on('typing-start', () => {
      socket.broadcast.emit('user-typing', { 
        userId: (socket as any).userId,
        typing: true 
      });
    });

    socket.on('typing-stop', () => {
      socket.broadcast.emit('user-typing', { 
        userId: (socket as any).userId,
        typing: false 
      });
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};