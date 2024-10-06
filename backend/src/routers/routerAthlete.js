import { Router } from "express";
import controllerAthlete from "../controllers/controllerAthletes.js";
import Auth from "../middleware/auth.js";
import authAthlete from "../middleware/authAthlete.js";
import authId from "../middleware/authId.js";

const routerAthlete = Router();
const { createAthlete, deleteAthlete, getAllAthletes, getAthleteById,
  getAthleteJoinSports, getAthleteJoinSportsById, updateAthlete, getAthleteBySportId } = controllerAthlete;

routerAthlete.get("/", Auth.validateToken, getAllAthletes);
routerAthlete.get("/:id", Auth.validateToken, authId.validateAndRespond, getAthleteById);
routerAthlete.get("/sport", Auth.validateToken, getAthleteJoinSports);
routerAthlete.get("/sport/:id", Auth.validateToken, authId.validateAndRespond, getAthleteJoinSportsById);
routerAthlete.post("/", Auth.validateToken, authAthlete.validateAndRespond, createAthlete);
routerAthlete.put("/:id", Auth.validateToken, authId.validateAndRespond, authAthlete.validateAndRespond, updateAthlete);
routerAthlete.delete("/:id", Auth.validateToken, authId.validateAndRespond, deleteAthlete);
routerAthlete.get("/sport/:id", Auth.validateToken, authId.validateAndRespond, getAthleteBySportId);

export default routerAthlete;