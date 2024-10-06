import serviceSport from "../services/serviceSport.js";
import { statusCode } from "../statusCode.js";

class ControllerSport {
  async createSport(req, res) {
    try {
      const sport = await serviceSport.createSport(req.body);
      return res.status(statusCode.OK).json({ message: sport });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json(error.message);
    }
  }

  async getAllSports(req, res) {
    try {
      const sports = await serviceSport.getAllSports();
      return res.status(statusCode.OK).json({ message: sports });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json(error.message);
    }
  }

  async getSportById(req, res) {
    try {
      const sport = await serviceSport.getSportById(req.params.id);
      if (!sport) return res.status(statusCode.NOT_FOUND).json({ message: 'Sport not found' });
      return res.status(statusCode.OK).json({ message: sport });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json(error.message);
    }
  }

  async updateSport(req, res) {
    try {
      const sport = await serviceSport.updateSport(req.params.id, req.body);
      if (!sport) return res.status(statusCode.NOT_FOUND).json({ message: 'Sport not found' });
      return res.status(statusCode.UPDATE).json({ message: sport });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json(error.message);
    }
  }

  async deleteSport(req, res) {
    try {
      const sport = await serviceSport.deleteSport(req.params.id);
      if (!sport) return res.status(statusCode.NOT_FOUND).json({ message: 'Sport not found' });
      return res.status(statusCode.OK).json({ message: 'Sport deleted successfully' });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json(error.message);
    }
  }

  async getSportAthlete(req, res) {
    try {
      const sport = await serviceSport.getSportAthletes(req.params.id);
      if (!sport) return res.status(statusCode.NOT_FOUND).json({ message: 'Sport not found' });
      return res.status(statusCode.OK).json({ message: sport });
    } catch (error) {
      return res.status(statusCode.INTERNAL_SERVER_ERROR).json(error.message);
    }

  }
}

const controllerSport = new ControllerSport();

export default controllerSport;