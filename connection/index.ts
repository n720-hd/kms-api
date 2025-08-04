import { Prisma, PrismaClient } from "../prisma_client";

export const prisma = new PrismaClient();

class Connection {
    private static instanceConnection: PrismaClient;

    public static getInstance(): PrismaClient
    {
        if(this.instanceConnection) {
            return this.instanceConnection
        }

        this.instanceConnection = new PrismaClient()
        return this.instanceConnection;
    }
}

const connection = Connection.getInstance();