import { Router } from "express";
import controllerSport from "../controllers/controllerSport.js";
import authSport from "../middleware/authSport.js";
import Auth from "../middleware/auth.js";
import authId from "../middleware/authId.js";

const routerSport = Router();

const { getAllSports, getSportById, createSport, updateSport, deleteSport, getSportAthlete } = controllerSport;
const { validateAndRespond } = authSport;

routerSport.get('/', Auth.validateToken, getAllSports);
routerSport.get('/:id', Auth.validateToken, authId.validateAndRespond, getSportById);
routerSport.post('/', Auth.validateToken, validateAndRespond, createSport);
routerSport.put('/:id', Auth.validateToken, authId.validateAndRespond, updateSport);
routerSport.get('/:id/athlete', Auth.validateToken, authId.validateAndRespond, getSportAthlete);
routerSport.delete('/:id', Auth.validateToken, authId.validateAndRespond, deleteSport);


export default routerSport;