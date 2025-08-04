import cron from 'node-cron';
import { prisma } from 'connection';

export const startUpdateQuestionType = () => {
   cron.schedule('*/5 * * * *', async () => {
    try {
        const currentDate = new Date();
        const questions = await prisma.question.findMany({
            where: {
                is_published: true,
                due_date: {lte: currentDate}
            }
        })

        if (questions.length > 0) {
            questions.forEach(async (question) => (
                await prisma.question.update({
                    where: {question_id: question.question_id},
                    data: {
                        collaborator_type: 'NONE'
                    }
                })
            ))
        }
    } catch (error) {
        console.error('Something went wrong while updating question type:', error);
    }
   })
}