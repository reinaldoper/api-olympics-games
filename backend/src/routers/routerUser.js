import { Router } from "express";
import controllerUser from "../controllers/controllerUsers.js";
import Auth from "../middleware/auth.js";
import authUser from "../middleware/authUser.js";
import authId from "../middleware/authId.js";

const routerUser = Router();

const { login, getUserById, register, deleteUser } = controllerUser;


routerUser.post('/login', login);
routerUser.get('/:id', Auth.validateToken, authId.validateAndRespond, getUserById);
routerUser.post('/register', authUser.validateAndRespond, register);
routerUser.delete('/:id', Auth.validateToken, authId.validateAndRespond, deleteUser);


export default routerUser;