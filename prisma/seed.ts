import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

var roles = [
    { name: "admin",  },
    { name: "user",  },
    { name: "creator",  },
    { name: "qa", },
]

async function main() {
    try {
        for (const role of roles) {
            await prisma.role.create({
                data: role,
            });
        }       
    } catch (error) {
        console.log(error)
    } finally {
        await prisma.$disconnect();
    }
}