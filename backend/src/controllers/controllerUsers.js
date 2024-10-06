import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import serviceUsers from '../services/serviceUsers.js';
import { statusCode } from '../statusCode.js';
import dotenv from 'dotenv';
dotenv.config()


class ControllerUsers {

    async login(req, res) {
        const { email, password } = req.body;
        try {
            const user = await serviceUsers.getUserByEmail(email);
            if (!user) {
                return res.status(statusCode.NOT_FOUND).json({ message: 'Invalid email.' });
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(statusCode.NOT_FOUND).json({ message: 'Invalid password.' });
            }
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            return res.status(statusCode.OK).json({ token: token });
        } catch (error) {
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error logging in' });
        }
    }

    async register(req, res) {
        const { email, password, name } = req.body;
        try {
            const existingUser = await serviceUsers.getUserByEmail(email);
            if (existingUser) {
                return res.status(statusCode.BAD_REQUEST).json({ message: 'User already exists' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await serviceUsers.createUser({ email, password: hashedPassword, name });
            return res.status(statusCode.OK).json({ message: newUser });
        } catch (error) {
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error creating user' });
        }
    }

    async getUserById(req, res) {
        const userId = req.params.id;
        try {
            const user = await serviceUsers.getUserById(userId);
            if (!user) {
                return res.status(statusCode.NOT_FOUND).json({ message: 'User not found' });
            }
            return res.status(statusCode.OK).json({ message: user });
        } catch (error) {
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error getting user' });
        }
    }

    async deleteUser(req, res) {
        const userId = req.params.id;
        try {
            const user = await serviceUsers.getUserById(userId);
            if (!user) {
                return res.status(statusCode.NOT_FOUND).json({ message: 'User not found' });
            }
            await serviceUsers.deleteUser(userId);
            return res.status(statusCode.OK).json({ message: 'User deleted' });
        } catch (error) {
            return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ message: 'Error deleting user' });
        }
    }
}

const controllerUser = new ControllerUsers();

export default controllerUser;