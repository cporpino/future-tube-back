import * as jwt from 'jsonwebtoken';

export default class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private birthDate: Date,
        private photo: string
    ) { }

    getId = () => this.id
    getName = () => this.name
    getEmail = () => this.email
    getPassword = () => this.password
    getbirthDate = () => this.birthDate
    getPhoto = () => this.photo

    static generateToken(id: string) {
        const jwtKey = process.env.JWT_KEY as string
        const token = jwt.sign(
            { id },
            jwtKey,
            { expiresIn: "24h" }
        )
        return token
    }

    static getTokenData(token: string) {
        const jwtKey = process.env.JWT_KEY as string
        const tokenData = jwt.verify(token, jwtKey) as { id: string }
        return tokenData
    }

    static encryptPassword(password: string) {
        const jwtKey = process.env.JWT_KEY as string
        const token = jwt.sign(
            { password },
            jwtKey,
            { expiresIn: "10000000000000000000000h" }
        )
        return token
    }

    static checkPassword(password: string, hashPassword: string) {
        const jwtKey = process.env.JWT_KEY as string
        const tokenData = jwt.verify(hashPassword, jwtKey) as { password: string }
        return (tokenData.password === password)
    }
}