import prisma from "@/prisma";
import jwt from "jsonwebtoken";
import fs from 'fs';
import { compile } from "handlebars";
import { transporter } from "@/utils/transporter";
import Handlebars from "handlebars";
import { comparePassword, hashPassword } from "@/utils/hash.password";

export const registerAdminService = async (email:string) => {
    const admin = await prisma.user.findUnique({
        where: {
            email,
            role: {
                name: 'admin'
            }
        }
    })
    if (admin) throw {msg:'Admin already exists', status: 400}  
    const registerAdminToken = jwt.sign({email}, '3214', {expiresIn: '1h'})
    const adminRoleId = await prisma.role.findUnique({
        where: { name: 'admin' },
        select: { id: true, name: true },
    })   
const createdAdmin = await prisma.user.create({
    data: {
        email,
        token: registerAdminToken,
        role: {
            connect: { id: adminRoleId?.id }
        },
        password: 'a43201234',
    }
})
    const template = fs.readFileSync('src/public/registration.html', 'utf-8');
    const url = `http://localhost:3000/auth/verify?token=${createdAdmin.token}`;
    const compiledEmail = compile(template);
    const personalizedEmail = compiledEmail({
        name: createdAdmin.email,
        url: url,
        role: adminRoleId!.name
    });

    await transporter.sendMail({
        to: email,
        subject: 'Registration',
        html: personalizedEmail
    });
}

export const registerUserService = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
            role: {
                name: 'user'
            }
        }
    })

    if (user) throw {msg:'User already exists', status: 400}  
    const registerUserToken = jwt.sign({email}, '3214', {expiresIn: '1h'})
    const userRoleId = await prisma.role.findUnique({
        where: { name: 'user' },
        select: { id: true, name: true },
    })

    const createdUser = await prisma.user.create({
        data: {
            email,
            token: registerUserToken,
            role: {
                connect: { id: userRoleId?.id }
            },
            password: 'a432012345',
        }
    })  
    const template = fs.readFileSync('src/public/registration.html', 'utf-8');
    const url = `http://localhost:3000/auth/verify?token=${createdUser.token}`;
    const compiledEmail = compile(template);
    const personalizedEmail = compiledEmail({
        name: createdUser.email,
        url: url,
        role: userRoleId!.name
    });
    await transporter.sendMail({
        to: email,
        subject: 'Registration',
        html: personalizedEmail
    });

}

export const registerCreatorService = async (email: string) => {
    const creator = await prisma.user.findUnique({
        where: {
            email,
            role: {
                name: 'creator'}
            }
        })
    if (creator) throw {msg:'Creator already exists', status: 400}
    const registerCreatorToken = jwt.sign({email}, '3214', {expiresIn: '1h'})
    const creatorRoleId = await prisma.role.findUnique({
        where: { name: 'creator' },
        select: { id: true, name: true },
    })
    const createdCreator = await prisma.user.create({
        data: {
            email,
            token: registerCreatorToken,
            role: {
                connect: { id: creatorRoleId?.id }
            }, 
            password: 'a432012345',
        }
    })
    const template = fs.readFileSync('src/public/registration.html', 'utf-8');
    const url = `http://localhost:3000/auth/verify?token=${createdCreator.token}`;
    const compiledEmail = compile(template);
    const personalizedEmail = compiledEmail({
        name: createdCreator.email,
        url: url,
        role: creatorRoleId!.name
    });
    await transporter.sendMail({
        to: email,
        subject: 'Registration',
        html: personalizedEmail
    });
}

export const createAdminService = async ({username, password, token}: {username: string, password: string, token: string}) => {
    const admin = await prisma.user.findUnique({
        where: {
            token,
            role: {
                name: 'admin'
            }
        }
    })

    if(!admin) throw {msg:'Invalid Link', status: 400}

    const adminRole = await prisma.role.findUnique({
        where: {
            name: 'admin'
        },
        select: {
            id: true
        }
    })

    await prisma.user.update({
        where: {
            token: token,
        },
        data: {
            username,
            password,
            token: null,
            role_id: adminRole!.id
        }   
    })
}

export const createUserService = async ({username, password, token}: {username: string, password: string, token: string}) => {
    const user = await prisma.user.findUnique({
        where: {
            token,
            role: {
                name: 'user'
            }
        }
    })

    if(!user) throw {msg:'Invalid Link', status: 400}
    const userRole = await prisma.role.findUnique({
        where: {
            name: 'user'
        },
        select: {
            id: true
        }
    })
    
    await prisma.user.update({
        where: {
            token: token,
        },
        data: {
            username,
            password,
            token: null,
            role_id: userRole!.id
        }   
    })
}

export const createCreatorService = async ({username, password, token}: {username: string, password: string, token: string}) => {
    const creator = await prisma.user.findUnique({
        where: {
            token,
            role: {
                name: 'creator'
            }
        }
    })
    if(!creator) throw {msg:'Invalid Link', status: 400}
    const creatorRole = await prisma.role.findUnique({
        where: {
            name: 'creator'
        },
        select: {
            id: true, name: true
        }
    })
    await prisma.user.update({
        where: {
            token: token,
        },
        data: {
            username,
            password,
            token: null,
            role_id: creatorRole!.id        
        }
    })
}

export const loginAdminService = async ({username, password}:{username: string, password: string}) => {
    const admin = await prisma.user.findFirst({
        where: {
            OR: [
                { email: username },
                { username: username }
            ],
        },include: {
            role: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })

    if(admin?.role.name !== 'admin') throw {msg: 'Invalid User', status: 400};
    if(!admin) throw {msg: 'Invalid User', status: 400};
    if(!admin.password) throw {msg: 'Password not set', status: 400};

    const isPasswordValid = await comparePassword(password, admin.password);
    if(!isPasswordValid) throw {msg: 'Invalid Password', status: 400};

    return admin
}

export const loginUserService = async ({username, password}:{username: string, password: string}) => {
    const user = await prisma.user.findFirst({
        where: {
            OR: [
                { email: username },
                { username: username }
            ],
        },include: {
            role: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    })

    if(user?.role.name !== 'user') throw {msg: 'Invalid User', status: 400};
    if(!user) throw {msg: 'Invalid User', status: 400};
    if(!user.password) throw {msg: 'Password not set', status: 400};

    const isPasswordValid = await comparePassword(password, user.password);
    if(!isPasswordValid) throw {msg: 'Invalid Password', status: 400};

    return user 
}

export const loginCreatorService = async ({username, password}:{username: string, password: string}) => {
    const creator = await prisma.user.findFirst({
        where: {
            OR: [
                {username: username},
                {email: username}
            ]
        },
        include: {
            role: {
                select: {
                    id: true,
                    name: true
                }
            }
        }   
    })
    
    if(creator?.role.name !== 'creator') throw {msg: 'Invalid User', status: 400};
    if(!creator) throw {msg: 'Invalid User', status: 400};
    if(!creator.password) throw {msg: 'Password not set', status: 400};
    const isPasswordValid = await comparePassword(password, creator.password);
    if(!isPasswordValid) throw {msg: 'Invalid Password', status: 400};
    return creator
}

export const keepLoginService = async ({id, role}:{id: number, role: string}) => {
    const user = await prisma.user.findUnique({
        where: {
            id,
            role: {
                name: role
            }
        },
        include: {
            role: {
                select: {id: true, name: true}
            }
        }
    })

    if (!user) throw {msg: 'Invalid User', status: 400}

    return user
}

export const changePasswordService = async ({id, role, password, oldPassword}:{id: number, role: string, password: string, oldPassword: string}) => {
    const user = await prisma.user.findUnique({
        where: {
            id,
            role: {
                name: role
            }
        }
    })

    if(!user) throw {msg: 'Invalid Credentials', status: 400};

    const isPasswordValid = await comparePassword(oldPassword, user.password);
    if(!isPasswordValid) throw {msg: 'Invalid Password', status: 400};

    const hashedPassword = await hashPassword(password);

    await prisma.user.update({
        where: {
            id: id,
            role_id: user.role_id
        },
        data: {
            password: hashedPassword
        }
    })
}