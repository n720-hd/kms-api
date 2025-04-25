import { prisma } from "connection"

export const setMaintenanceModeService = async ({maintenanceMode, id, role}: {maintenanceMode: boolean, id: number, role: string}) => {
    await prisma.user.findUnique({
        where: {
            id,
            role: {
                name: role
            }
        }
    })
    if(role !== 'admin') throw {msg: 'You are unauthorized to perform this action', status: 401}

    await prisma.config.update({
        where: {
            name: 'is_maintenance'
        },
        data: {
            status: maintenanceMode
        }
    })
}

export const takeDownPostService = async({id, role, postIds}: {id: number, role: string, postIds: number[]}) => {
    if (role !== 'admin') throw {msg: 'You are unauthorized to perform this action', status: 401};
    postIds.length > 1 ? await prisma.question.updateMany({
        where: {
            question_id: {in: postIds}
        },
        data: {
            deleted_at: new Date()
        }
    }) : await prisma.question.update({
        where: {
            question_id: postIds[0]
        },
        data: {
            deleted_at: new Date()
        }
    })
}

export const getAllUsersService = async ({id, role}: {id: number, role: string}) => {
   const users = await prisma.user.findMany({
        where: {
            role: {
                name: {not: 'admin'}
            }
        },
        select: {
            id: true,
            username: true,
            email: true
        }
    })

    return users
}


