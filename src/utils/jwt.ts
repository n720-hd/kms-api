import jwt from 'jsonwebtoken';

const generateTokenSecret = process.env.SECRET_KEY_GENERATE_TOKEN as string
const accessTokenSecret = process.env.SECRET_KEY_ACCESS_TOKEN as string

console.log('generateTokenSecret:', generateTokenSecret)
console.log('accessTokenSecret:', process.env.SECRET_KEY_ACCESS_TOKEN)

export const generateToken = ({id, role}:{id: number, role: string}) => {
    return jwt.sign({id, role}, generateTokenSecret, {expiresIn: '2h'})
}

export const verifyToken = (token: string) => {
    return jwt.verify(token, generateTokenSecret, (err, decoded) => {
        if (err) {
            if (err.name){
                return err.message
            }
        }
        return decoded
    }
    )

    
}

export const decodeToken = (token: string) => {
    return jwt.decode(token)
}