import cron from 'node-cron';
import { startUpdateQuestionType } from './scheduler.config';


export const startScheduler = () => {
    cron.schedule('*/5 * * * * ', async () => {
        console.log('executing scheduler every 5 minutes');
    })
    startUpdateQuestionType();
}