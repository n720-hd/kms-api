import { prisma } from "connection"

export const setMaintenanceModeService = async ({maintenanceMode, id, role}: {maintenanceMode: boolean, id: number, role: string}) => {
    await prisma.user.findUnique({
        where: {
            user_id:id,
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
            user_id: true,
            username: true,
            email: true
        }
    })
    return users
}

export const getAllDivisionsService = async ({id, role}: {id: number, role: string}) => {
  const admin = await prisma.user.findUnique({
    where: {
        user_id: id,
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

export const getAllPendingAnswerService = async({id, role}:{id: number, role: string}) => {
    const isAuthorized = await prisma.user.findUnique({
        where: {
            user_id: id,
            role: {
                name: 'admin'
            }
        }
    })
    if(!isAuthorized) throw {msg: 'Invalid credentials', status: 406}

    return await prisma.answer.findMany({
        where: {
            is_accepted: false
        }
    })
}

export const approvePendingAnswerService = async({id, role, answer_ids}:{id: number, role: string, answer_ids: number[]}) => {
    const isAuthorized = await prisma.user.findUnique({
        where: {
            user_id: id,
            role: {
                name: 'admin'
            }
        }
    })

    if(!isAuthorized) throw {msg: 'Invalid credentials', status: 406};

    await prisma.$transaction(async (tx) => {
         await tx.answer.updateMany({
            where: {
                answer_id: {in: answer_ids}
            },
            data: {
                is_accepted: true
            }
        })

        const answers = await tx.answer.findMany({
            where: {answer_id: {in: answer_ids}
        },include: {
            user: true,
            question: {
                include: {
                    creator: {
                        select: {
                            user_id: true
                        }
                    }
                }
            }
        }
        })
        await Promise.all(
        answers.map(answer => 
             tx.notification.create({
                data: {
                    user_id: answer.user_id,
                    content: `Your answer to ${answer.question.title} has been accepted`,
                    notification_type: 'ANSWER_ACCEPTED'
                }
            })
        )
       )

    })
}

export const getUserRoleService = async({id, role}:{id: number, role: string}) => {
    if(role !== 'admin') throw {msg: 'Invalid credentials', status: 406}
    const isAdmin = await prisma.user.findUnique({
        where: {
            user_id: id,
            role: {
                name: 'admin'
            }
        }
    })
    if(!isAdmin) throw {msg: 'Invalid credentials', status: 406}

    return await prisma.role.findMany()
}

export const setUserRoleService = async({id, role, user_id, role_id}:{id: number, role: string, user_id: number, role_id: number}) => {
    if(role !== 'admin') throw {msg: 'Invalid credentials', status: 406}
    const isAdmin = await prisma.user.findUnique({
        where: {
            user_id: id,
            role: {
                name: 'admin'
            }
        }
    })
    if(!isAdmin) throw {msg: 'Invalid credentials', status: 406};
    
    const isRoleValid = await prisma.role.findUnique({
        where: {
            id: role_id
        }
    })
    if(!isRoleValid) throw {msg: 'Invalid role, please input a valid one', status: 406};

    await prisma.user.update({
        where: {
            user_id
        },
        data: {
            role_id
        }
    })
}

export const setUserDivisionService = async({id, role, user_id, division_id}:{id: number, role: string, user_id: number, division_id: number}) => {
    if(role !== 'admin') throw {msg: 'Invalid credentials', status: 406}
    const isAdmin = await prisma.user.findUnique({
        where: {
            user_id: id,
            role: {
                name: 'admin'
            }
        }
    })
    if(!isAdmin) throw {msg: 'Invalid credentials', status: 406};

    const isDivisionValid = await prisma.division.findUnique({
        where: {
            id: division_id
        }
    })
    if(!isDivisionValid) throw {msg: 'Invalid division', status: 406};

    await prisma.user.update({
        where: {
            user_id
        },
        data: {
            division_id: division_id
        }
    })
}