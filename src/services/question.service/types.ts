import { Prisma } from "../../../prisma/client";

export interface ICreateQuestion {
  title: string;
  content: string;
  due_date: Date;
  tag_ids: number[];
  collaborator_type: "PERSONAL" | "DIVISION" | "NONE";
  collaborator_id: number;
  collaborator_division_id: number;
  id: number;
  role: string;
  attachments: { 
    attachments: Express.Multer.File[] 
  };
}

// interface attachments {
//   attachments: Express.Multer.File[]
// }

export interface IEditQuestion{
  title: string;
  content: string;
  due_date: Date;
  tag_ids: number[];
  collaborator_type: "PERSONAL" | "DIVISION" | "NONE";
  collaborator_id?: number;
  id: number;
  role: string;
  attachments: { 
    attachments: Express.Multer.File[] 
  };
  question_id: number;
  attachmentsToDelete?: number[];
  tagsToDelete?: number[];
  collaborator_division_id?: number;
}

export interface IGetAllQuestionsList {
  search: string;
  sortBy: string;
  sortOrder: string;
  page: number;
  limit: number;
  tags: string[];
  status: string;
  filter: string;
}

export type PrismaTransactionalClient = Prisma.TransactionClient;

export type QuestionStatus =
  | "PENDING"
  | "ASSIGNED"
  | "REJECTED"
  | "ANSWERED"
  | "CLOSED";
