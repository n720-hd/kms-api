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

export const getAllDivisionsService = async ({id, role}: {id: number, role: string}) => {
  const admin = await prisma.user.findUnique({
    where: {
        id: id,
        role: {
            name: role
        }
    }
  })
  if(!admin) throw {msg: 'You are unauthorized to perform this action', status: 401};

  const divisions = await prisma.division.findMany({
    where: {
        deleted_at: null
    }
  })

  return divisions
}

export const approvePendingQuestionService = async ({id, role, question_id, status}:{id: number, role: string, question_id: number, status: boolean}) => {
    if (role !== 'admin' && role !== 'reviewer') throw {msg: 'You are unauthorized to perform this action', status: 401};
    status === true ? (await prisma.question.update({
        where: {
             question_id: question_id
        },
        data: {
            status: 'ASSIGNED'
        }
    })) : (await prisma.question.update({
        where: {
            question_id: question_id
        },
        data: {
            status: 'REJECTED'
        }
    }))
}

export const takeDownQuestionService = async ({id, role, question_ids}:{id: number, role: string, question_ids: number[]}) => {
    if (role !== 'admin') {
        await prisma.question.updateMany({
            where: {
                question_id: {in:question_ids},
                creator_id: id,
                deleted_at: null,
                is_published: true
            },
            data: {
                deleted_at: new Date(),
                is_published: false
            }
        })
    } else if (role === 'admin') {
        await prisma.question.updateMany({
            where: {
                question_id: {in: question_ids},
                deleted_at: null,
                is_published: true,
            },
            data: {
            deleted_at: new Date(),
            is_published: false
        }
        })
    }
}
