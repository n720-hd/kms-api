export interface ICreateAnswer {
    id: number;
    role: string;
    question_id: number;
    attachments: Express.Multer.File[];
    content: string; 
}

export interface IEditAnswer{
    id: number;
    role: string;
    attachments?: Express.Multer.File[];
    content?: string; 
    answer_id: number;
    attachmentsToDelete?: number[];
}