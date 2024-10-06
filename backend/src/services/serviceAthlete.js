import pool from "../../db.js";


class AthleteService {
    async getAthletes(limit, olympicId) {
        const query = 'SELECT * FROM Athlete WHERE paralympic = ? LIMIT ?';
        const [rows] = await pool.query(query, [olympicId, limit]);
        return rows;
    }
    

    async getAthleteById(id) {
        const [rows] = await pool.query('SELECT * FROM Athlete WHERE id = ?', [id]);
        return rows[0];
    }

    async createAthlete(athlete) {
        const { name,
            sportId,
            paralympic,
            instagramUrl,
            instagramName,
            instagramImageUrl,
            instagramFollowersCount,
            instagramFollowingCount,
            instagramPostsCount,
            instagramBio } = athlete;
        const [result] = await pool.query('INSERT INTO Athlete (name, sportId, paralympic, instagramUrl, instagramName, instagramImageUrl, instagramFollowersCount, instagramFollowingCount, instagramPostsCount, instagramBio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [name, sportId, paralympic, instagramUrl, instagramName, instagramImageUrl, instagramFollowersCount, instagramFollowingCount, instagramPostsCount, instagramBio]);
        return result.insertId;
    }

    async updateAthlete(id, athlete) {
        const resultId = await this.getAthleteById(id);
        if (!resultId) return false;
        const { name,
            sportId,
            paralympic,
            instagramUrl,
            instagramName,
            instagramImageUrl,
            instagramFollowersCount,
            instagramFollowingCount,
            instagramPostsCount,
            instagramBio } = athlete;
        const [result] = await pool.query('UPDATE Athlete SET name = ?, sportId = ?, paralympic = ?, instagramUrl = ?, instagramName = ?, instagramImageUrl = ?, instagramFollowersCount = ?, instagramFollowingCount = ?, instagramPostsCount = ?, instagramBio = ? WHERE id = ?',
            [name,
                sportId,
                paralympic,
                instagramUrl,
                instagramName,
                instagramImageUrl,
                instagramFollowersCount,
                instagramFollowingCount,
                instagramPostsCount,
                instagramBio, id]);
        return result.affectedRows;
    }

    async deleteAthlete(id) {
        const resultId = await this.getAthleteById(id);
        if (!resultId) return false;
        const [result] = await pool.query('DELETE FROM Athlete WHERE id = ?', [id]);
        return result.affectedRows;
    }

    async getAthleteJoinSport() {
        const [rows] = await pool.query('SELECT a.id, a.name, a.paralympic, a.instagramUrl, a.instagramName, a.instagramImageUrl, a.instagramFollowersCount, a.instagramFollowingCount, a.instagramPostsCount, a.instagramBio, s.name AS sportName FROM Athlete a JOIN Sport s ON a.sportId = s.id');
        return rows;
    }
    async getAthleteJoinSportById(id) {
        const [rows] = await pool.query('SELECT a.id, a.name, a.paralympic, a.instagramUrl, a.instagramName, a.instagramImageUrl, a.instagramFollowersCount, a.instagramFollowingCount, a.instagramPostsCount, a.instagramBio, s.name AS sportName FROM Athlete a JOIN Sport s ON a.sportId = s.id WHERE a.id = ?', [id]);
        return rows[0];
    }

    async getAthleteBySportId(sportId) {
        const resultId = await this.getAthleteById(id);
        if (!resultId) return false;
        const [rows] = await pool.query('SELECT * FROM Athlete WHERE sportId = ?', [sportId]);
        return rows;
    }

}

const athleteService = new AthleteService();

export default athleteService;