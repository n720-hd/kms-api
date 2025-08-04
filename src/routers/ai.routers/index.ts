import { chatAi, deleteConversation, getAiConversation, getAiConversationList, testAi } from '@/controllers/ai.controller';
import { verifyUserToken } from '@/middleware/verify.token';
import Router from 'express';

const router = Router();

router.post('/test', testAi);
router.post('/chat' ,verifyUserToken, chatAi);
router.get('/chat/:conversationId',verifyUserToken, getAiConversation);
router.get('/chats', verifyUserToken, getAiConversationList);
router.patch('/chat/:conversationId/delete', verifyUserToken, deleteConversation);

export default router;