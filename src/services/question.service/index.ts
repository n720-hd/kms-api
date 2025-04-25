import { prisma } from "connection"

export const createQuestionService = async () => {
    
}

export const getAllQuestionsListService = async () => {
    const questions = await prisma.question.findMany({
        where: {
            deleted_at: null 
        },
        include: {
            creator: { 
                select: {
                    id: true,
                    username: true,
                    email: true
                }
            },
            tags: { 
                select: {
                    tag: {
                        select: {
                            tag_id: true,
                            name: true
                        }
                    }
                }
            },
            _count: { 
                select: {
                    likes: true,
                    comments: true
                }
            }
        }
    });

    return questions;
}

export const getAllTagsService = async () => {
    
}