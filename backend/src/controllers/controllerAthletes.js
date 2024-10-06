import { statusCode } from "../statusCode.js";
import athleteService from "../services/serviceAthlete.js";

class controllerAthletes {
  async createAthlete(req, res) {
    try {
      const athlete = await athleteService.createAthlete(req.body);
      return res.status(statusCode.CREATED).json({ message: athlete });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async getAllAthletes(req, res) {
    try {
      const limit = parseInt(req.query.limit, 10) || 10;
      const { olympicId } = req.body;
      const athletes = await athleteService.getAthletes(limit, olympicId);
      return res.status(statusCode.OK).json({ message: athletes });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }
  

  async getAthleteById(req, res) {
    try {
      const { id } = req.params;
      const athlete = await athleteService.getAthleteById(id);
      if (!athlete) return res.status(statusCode.NOT_FOUND).json({ message: 'Athlete not found' });
      return res.status(statusCode.OK).json({ message: athlete });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async updateAthlete(req, res) {
    try {
      const { id } = req.params;
      const athlete = await athleteService.updateAthlete(id, req.body);
      if (!athlete) return res.status(statusCode.NOT_FOUND).json('Athlete not found');
      return res.status(statusCode.OK).json({ message: athlete });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async deleteAthlete(req, res) {
    try {
      const { id } = req.params;
      const athlete = await athleteService.deleteAthlete(id);
      if (!athlete) return res.status(statusCode.NOT_FOUND).json('Athlete not found');
      return res.status(statusCode.OK).json({ message: athlete });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async getAthleteJoinSports(req, res) {
    try {
      const athletes = await athleteService.getAthleteJoinSport();
      return res.status(statusCode.OK).json({ message: athletes });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async getAthleteJoinSportsById(req, res) {
    try {
      const { id } = req.params;
      const athlete = await athleteService.getAthleteJoinSportById(id);
      if (!athlete) return res.status(statusCode.NOT_FOUND).json({ message:'Athlete not found' });
      return res.status(statusCode.OK).json({ message: athlete });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

  async getAthleteBySportId(req, res) {
    try {
      const { id } = req.params;
      const athlete = await athleteService.getAthleteById(id);
      if (!athlete) return res.status(statusCode.NOT_FOUND).json({ message: 'Athlete not found' });
      const athletes = await athleteService.getAthleteBySportId(id);
      return res.status(statusCode.OK).json({ message: athletes });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json({ error: error.message });
    }
  }

}


const controllerAthlete = new controllerAthletes();

export default controllerAthlete;