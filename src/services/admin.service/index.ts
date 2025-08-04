import { prisma } from "connection"
import { PrismaTransactionalClient } from "../question.service/types"

export const setMaintenanceModeService = async ({maintenanceMode, id, role}: {maintenanceMode: boolean, id: number, role: string}) => {
    const isAdmin = await prisma.user.findUnique({
        where: {
            user_id:id,
            role: {
                name: 'admin'
            }
        }
    })
    if(!isAdmin || role!== 'admin') throw {msg: 'You are unauthorized to perform this action', status: 401}

    await prisma.config.update({
        where: {
            name: 'is_maintenance'
        },
        data: {
            status: maintenanceMode
        }
    })
}

export const getMaintenanceModeService = async ({id, role}: {id: number, role: string}) => {
    const isAdmin = await prisma.user.findUnique({
        where: {
            user_id:id,
            role: {
                name: 'admin'
            }
        }
    })
    if(!isAdmin || role!== 'admin') throw {msg: 'You are unauthorized to perform this action', status: 401}

    const maintenanceMode = await prisma.config.findUnique({
        where: {
            name: 'is_maintenance'
        },
        select: {
            status: true
        }
    })

    return maintenanceMode?.status
}



export const getAllUsersService = async ({id, role}: {id: number, role: string}) => {
   const users = await prisma.user.findMany({
        where: {
            role: {
                name: {not: 'admin'}
            }
        },
        select: {
            first_name: true,
            last_name: true,
            profile_picture: true,
            user_id: true,
            username: true,
            email: true,
            created_at: true,
            updated_at: true,
            role: {
                select: {
                    role_id: true,
                    name: true,
                }
            },
            division: {
                select: {
                    id: true,
                    division_name: true
                }
            }
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

export const takeDownQuestionService = async ({id, role, question_id}:{id: number, role: string, question_id: number}) => {
    if (role !== 'admin') throw {msg: 'You are unauthorized to perform this action', status: 401};
    const isAdmin = await prisma.user.findUnique({
        where: {
            user_id: id,
            role: {
                name: 'admin'}
        }
    })
    if(!isAdmin) throw {msg: 'You are unauthorized to perform this action', status: 401};
    const question = await prisma.question.findUnique({
        where: {
            question_id: question_id
        }
    })
    if(!question) throw {msg: 'Question not found', status: 404};
    if(question.deleted_at){
        await prisma.question.update({
            where: {
                question_id: question_id
            },
            data: {
                deleted_at: null,
                updated_at: new Date()
            }
        })
    }else{
        await prisma.question.update({
            where: {
                question_id: question_id
            },
            data: {
                deleted_at: new Date(),
                updated_at: new Date()
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

export const approvePendingAnswerService = async({id, role, answer_id}:{id: number, role: string, answer_id: number}) => {
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
        
        const answer = await tx.answer.findUnique({
            where: { answer_id: answer_id },
            include: {
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
        });
        if (!answer) throw {msg: 'Answer not found', status: 404};
        
        if(!answer.is_accepted) {
            await tx.answer.update({
               where: {
                   answer_id
               },
               data: {
                   is_accepted: true
               }
           })
           await tx.notification.create({
            data: {
                user_id: answer.user_id,
                content: `Your answer to ${answer.question.title} has been accepted`,
                notification_type: 'ANSWER_ACCEPTED'
            }
        });
        }else{
            await tx.answer.update({
                where: {
                    answer_id
                },
                data: {
                    is_accepted: false
                }
            })
        }
    });
}

export const getAllAnswerListService = async({
    id, 
    role, 
    search, 
    filter,
    page = 1,
    limit = 10
}: {
    id: number, 
    role: string,
    search?: string,
    filter?: string,
    page?: number,
    limit?: number
}) => {
    const isAuthorized = await prisma.user.findUnique({
        where: {
            user_id: id,
            role: {
                name: 'admin'
            }
        }
    })
    if(!isAuthorized) throw {msg: 'Invalid credentials', status: 406}

    // Validate pagination parameters
    const pageNumber = Math.max(1, page);
    const pageSize = Math.min(Math.max(1, limit), 100); // Max 100 items per page
    const skip = (pageNumber - 1) * pageSize;

    // Build where clause for search - MySQL compatible
    const whereClause: any = {};
    
    if (search && search.trim()) {
        whereClause.OR = [
            {
                content: {
                    contains: search
                    // Note: Removed mode: "insensitive" for MySQL compatibility
                }
            },
            {
                user: {
                    OR: [
                        {
                            username: {
                                contains: search
                            }
                        },
                        {
                            first_name: {
                                contains: search
                            }
                        },
                        {
                            last_name: {
                                contains: search
                            }
                        }
                    ]
                }
            },
            {
                question: {
                    title: {
                        contains: search
                    }
                }
            }
        ];
    }

    // Add filter for pending answers
    if (filter === 'pending') {
        whereClause.is_accepted = false;
    }

    // Determine sort order
    let orderBy: any = { created_at: 'desc' }; // default to newest
    
    if (filter === 'oldest') {
        orderBy = { created_at: 'asc' };
    } else if (filter === 'newest') {
        orderBy = { created_at: 'desc' };
    }

    // Get total count and data in parallel
    const [totalCount, answers] = await Promise.all([
        prisma.answer.count({ where: whereClause }),
        prisma.answer.findMany({
            where: whereClause,
            include: {
                user: {
                    select: {
                        user_id: true,
                        username: true,
                        first_name: true,
                        last_name: true,
                        profile_picture: true
                    }
                },
                question: {
                    select: {
                        question_id: true,
                        title: true
                    }
                }
            },
            orderBy,
            skip,
            take: pageSize
        })
    ]);

    // Calculate pagination metadata
    const totalPages = Math.ceil(totalCount / pageSize);
    const hasNextPage = pageNumber < totalPages;
    const hasPrevPage = pageNumber > 1;

    return {
        data: answers,
        pagination: {
            currentPage: pageNumber,
            pageSize,
            totalItems: totalCount,
            totalPages,
            hasNextPage,
            hasPrevPage,
            nextPage: hasNextPage ? pageNumber + 1 : null,
            prevPage: hasPrevPage ? pageNumber - 1 : null
        }
    };
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

    return await prisma.role.findMany({
        where: {
            name: {
                not: 'admin'
            }
        }
    })
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
             role_id,
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

    if (division_id !== null && division_id !== undefined) {
    const isDivisionValid = await prisma.division.findUnique({
      where: {
        id: division_id,
      }
    });
    
    if (!isDivisionValid) {
      throw { msg: 'Invalid division', status: 400 };
    }
  }

    await prisma.user.update({
        where: {
            user_id
        },
        data: {
            division_id: division_id
        }
    })
}

export const createNewDivisionService = async({id, role, division_name}:{id: number, role: string, division_name: string}) => {
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
    
    if(!division_name) throw {msg: 'Division name is required', status: 406};

    await prisma.division.create({
        data: {
            division_name: division_name
        }
    })
}

export const getRecentUsersService = async({
    id, 
    role, 
    limit = 10
}: {
    id: number, 
    role: string, 
    limit?: number
}) => {
    // Check if user has admin privileges
    if (role !== 'admin') {
        throw { msg: 'Access denied. Admin privileges required.', status: 403 };
    }

    const users = await prisma.user.findMany({
        take: limit,
        orderBy: {
            created_at: 'desc'
        },
        select: {
            user_id: true,
            username: true,
            email: true,
            first_name: true,
            last_name: true,
            created_at: true,
            updated_at: true,
            profile_picture: true,
            division: {
                select: {
                    id: true,
                    division_name: true
                }
            },
            role: {
                select: {
                    role_id: true,
                    name: true
                }
            },
            // Count user activity
            _count: {
                select: {
                    created_questions: true,
                    answers: true,
                    comments: true,
                    likes: true
                }
            }
        },
        where: {
            deleted_at: null,
            role: {
                name: { not: 'admin' } 
            }
        }
    });

    return users;
};


export const getRecentQuestionsService = async({
    id, 
    role, 
    limit = 10
}: {
    id: number, 
    role: string, 
    limit?: number
}) => {
    // Check if user has admin privileges
    if (role !== 'admin') {
        throw { msg: 'Access denied. Admin privileges required.', status: 403 };
    }

    const questions = await prisma.question.findMany({
        take: limit,
        orderBy: {
            created_at: 'desc'
        },
        select: {
            question_id: true,
            title: true,
            content: true,
            status: true,
            created_at: true,
            updated_at: true,
            due_date: true,
            is_published: true,
            collaborator_type: true,
            creator: {
                select: {
                    user_id: true,
                    username: true,
                    first_name: true,
                    last_name: true,
                    division: {
                        select: {
                            division_name: true
                        }
                    }
                }
            },
            collaborator: {
                select: {
                    user_id: true,
                    username: true,
                    first_name: true,
                    last_name: true
                }
            },
            collaborator_division: {
                select: {
                    id: true,
                    division_name: true
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
                    answers: true,
                    comments: true,
                    likes: true,
                    attachment: true
                }
            }
        },
        where: {
            deleted_at: null // Only active questions
        }
    });

    // Format the response to flatten tags
    const formattedQuestions = questions.map(question => ({
        ...question,
        tags: question.tags.map(tagRelation => tagRelation.tag)
    }));

    return formattedQuestions;
};

export const getDashboardStatisticsService = async({
    id, 
    role,
    questionsPage = 1,
    questionsLimit = 10,
    questionStatus = null // 'PENDING', 'ASSIGNED', 'ANSWERED', 'CLOSED', 'REJECTED' or null for all
}: {
    id: number, 
    role: string,
    questionsPage?: number,
    questionsLimit?: number,
    questionStatus?: string | null
}) => {
    // Check if user has admin privileges
    if (role !== 'admin') {
        throw { msg: 'Access denied. Admin privileges required.', status: 403 };
    }

    // Build questions filter
    const questionsFilter: any = {
        deleted_at: null,
    };
    if (questionStatus) {
        questionsFilter.status = questionStatus as any; // Cast to enum if needed, or import and use the correct enum type
    }

    // Get all statistics in parallel for better performance
    const [
        totalUsers,
        totalQuestions,
        totalAnswers,
        totalDivisions,
        pendingQuestions,
        answeredQuestions,
        rejectedQuestions,
        closedQuestions,
        assignedQuestions,
        recentActivity,
        divisions,
        allQuestions,
        totalQuestionsForStatus
    ] = await Promise.all([
        // Basic counts
        prisma.user.count({
            where: { deleted_at: null }
        }),
        
        prisma.question.count({
            where: { deleted_at: null }
        }),
        
        prisma.answer.count({
            where: { deleted_at: null }
        }),
        
        prisma.division.count({
            where: { deleted_at: null }
        }),

        // Status specific counts
        prisma.question.count({
            where: { 
                status: 'PENDING',
                deleted_at: null 
            }
        }),

        prisma.question.count({
            where: { 
                status: 'ANSWERED',
                deleted_at: null 
            }
        }),

        prisma.question.count({
            where: { 
                status: 'REJECTED',
                deleted_at: null 
            }
        }),

        prisma.question.count({
            where: { 
                status: 'CLOSED',
                deleted_at: null 
            }
        }),

        prisma.question.count({
            where: { 
                status: 'ASSIGNED',
                deleted_at: null 
            }
        }),

        // Recent activity (last 7 days)
        Promise.all([
            prisma.user.count({
                where: {
                    created_at: {
                        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                    },
                    deleted_at: null
                }
            }),
            
            prisma.question.count({
                where: {
                    created_at: {
                        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                    },
                    deleted_at: null
                }
            }),
            
            prisma.answer.count({
                where: {
                    created_at: {
                        gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                    },
                    deleted_at: null
                }
            })
        ]),

        // Divisions with detailed stats
        prisma.division.findMany({
            select: {
                id: true,
                division_name: true,
                created_at: true,
                _count: {
                    select: {
                        users: {
                            where: { deleted_at: null }
                        },
                        assigned_questions: {
                            where: { deleted_at: null }
                        }
                    }
                }
            },
            where: {
                deleted_at: null
            },
            orderBy: {
                created_at: 'desc'
            }
        }),

        // All questions with pagination and filtering
        prisma.question.findMany({
            where: questionsFilter,
            select: {
                question_id: true,
                title: true,
                content: true,
                status: true,
                created_at: true,
                updated_at: true,
                due_date: true,
                collaborator_type: true,
                is_published: true,
                creator: {
                    select: {
                        user_id: true,
                        username: true,
                        first_name: true,
                        last_name: true,
                        profile_picture: true
                    }
                },
                collaborator: {
                    select: {
                        user_id: true,
                        username: true,
                        first_name: true,
                        last_name: true
                    }
                },
                collaborator_division: {
                    select: {
                        id: true,
                        division_name: true
                    }
                },
                _count: {
                    select: {
                        answers: {
                            where: { deleted_at: null }
                        },
                        comments: {
                            where: { deleted_at: null }
                        },
                        likes: true
                    }
                }
            },
            orderBy: {
                created_at: 'desc'
            },
            skip: (questionsPage - 1) * questionsLimit,
            take: questionsLimit
        }),

        // Total count for pagination (with current filter)
        prisma.question.count({
            where: questionsFilter
        })
    ]);

    // Get answer counts per division
    const divisionAnswerCounts = await Promise.all(
        divisions.map(async (division) => {
            const answerCount = await prisma.answer.count({
                where: {
                    deleted_at: null,
                    user: {
                        division_id: division.id,
                        deleted_at: null
                    }
                }
            });
            return { divisionId: division.id, answerCount };
        })
    );

    // Merge answer counts with divisions
    const divisionsWithStats = divisions.map(division => {
        const answerData = divisionAnswerCounts.find(d => d.divisionId === division.id);
        return {
            ...division,
            stats: {
                members: division._count.users,
                questions: division._count.assigned_questions,
                answers: answerData?.answerCount || 0
            }
        };
    });

    // Get question status distribution
    const questionStatusDistribution = await prisma.question.groupBy({
        by: ['status'],
        _count: {
            status: true
        },
        where: {
            deleted_at: null
        }
    });

    // Calculate pagination info
    const totalPages = Math.ceil(totalQuestionsForStatus / questionsLimit);
    const hasNextPage = questionsPage < totalPages;
    const hasPrevPage = questionsPage > 1;

    return {
        // Basic statistics
        totalUsers,
        totalQuestions,
        totalAnswers,
        totalDivisions,
        
        // Question statistics by status
        pendingQuestions,
        answeredQuestions,
        rejectedQuestions,
        closedQuestions,
        assignedQuestions,
        
        // Question status distribution
        questionStatusDistribution: questionStatusDistribution.map(item => ({
            status: item.status,
            count: item._count.status
        })),
        
        // Recent activity (last 7 days)
        recentActivity: {
            newUsers: recentActivity[0],
            newQuestions: recentActivity[1],
            newAnswers: recentActivity[2]
        },
        
        // Divisions with detailed stats
        divisions: divisionsWithStats,
        
        // All questions with pagination
        questions: {
            data: allQuestions,
            pagination: {
                currentPage: questionsPage,
                totalPages,
                totalItems: totalQuestionsForStatus,
                itemsPerPage: questionsLimit,
                hasNextPage,
                hasPrevPage
            }
        }
    };
};

export const getDeletedQuestionsService = async({
    id,
    role,
}: {id: number, role: string}) => {
    const deletedQuestions = await prisma.question.findMany({
        where: {
            deleted_at: {
                not: null
            }
        },
        include: {
            creator: {
                select: {
                    user_id: true,
                    username: true,
                    profile_picture: true
                }
            }
        }
    })

    return deletedQuestions.map(question => ({
        question_id: question.question_id,
        title: question.title,
        content: question.content,
        status: question.status,
        created_at: question.created_at,
        updated_at: question.updated_at,
        due_date: question.due_date,
        collaborator_type: question.collaborator_type,
        creator: {
            user_id: question.creator.user_id,
            username: question.creator.username,
            profile_picture: question.creator.profile_picture
        },
        deleted_at: question.deleted_at
    }))
}