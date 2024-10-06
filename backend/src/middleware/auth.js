import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { statusCode } from '../statusCode.js';
dotenv.config()

class Auth {
    static validateToken(req, res, next) {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(statusCode.BAD_REQUEST).json({ message: 'Unauthorized' });
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(statusCode.UNAUTHORIZED).json({ message: 'Invalid token' });
        }
    }
}


export default Auth;