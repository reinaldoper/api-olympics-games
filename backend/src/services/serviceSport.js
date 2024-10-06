import pool from "../../db.js";

class ServiceSport {
  async getAllSports() {
    const [rows] = await pool.query("SELECT * FROM Sport");
    return rows;
  }

  async getSportById(id) {
    const [rows] = await pool.query("SELECT * FROM Sport WHERE id = ?", [id]);
    return rows[0];
  }

  async createSport(body) {
    const { name, code, paralympic } = body;  
    const [result] = await pool.query(
      "INSERT INTO Sport (name, code, paralympic) VALUES (?, ?, ?)",
      [name, code, paralympic]
    );
    return result.insertId;
  }

  async updateSport(id, body) {
    const { name, code, paralympic } = body;  
    const resultId = await this.getSportById(id);
    if (!resultId) return false;
    const result = await pool.query("UPDATE Sport SET name = ?, code = ?, paralympic = ? WHERE id = ?", [
      name,
      code,
      paralympic,
      id,
    ]);
    return result.affectedRows;
  }

  async deleteSport(id) {
    const result = await this.getSportById(id);
    if (!result) return false;
    await pool.query("DELETE FROM Sport WHERE id = ?", [id]);
    return true;
  }

  async getSportAthletes(id) {
    const result = await this.getSportById(id);
    if (!result) return false;
    const [rows] = await pool.query("SELECT * FROM Athlete WHERE sportId = ?", [id]);
    return rows;
  }
}

const serviceSport = new ServiceSport();

export default serviceSport;