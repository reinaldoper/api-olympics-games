import pool from "../../db.js";

class ServiceUsers {
  async getAllUsers() {
    const [rows] = await pool.query("SELECT * FROM Users");
    return rows;
  }

  async getUserById(id) {
    const [rows] = await pool.query("SELECT * FROM Users WHERE id = ?", [id]);
    return rows[0];
  }

  async getUserByEmail(email) {
    const [rows] = await pool.query("SELECT * FROM Users WHERE email = ?", [email]);
    return rows[0];
  }

  async createUser({ email, password, name }) {
    const [result] = await pool.query("INSERT INTO Users (name, email, password ) VALUES(?, ?, ?)",
      [name, email, password]
    );
    return result.insertId;
  }

  async updateUser(id, user) {
    const resultId = await this.getUserById(id);
    if (!resultId) return false;
    const { name } = user;
    const [result] = await pool.query("UPDATE Users SET name ? WHERE id = ?", [name, id]);
    return result.affectedRows;
  }

  async deleteUser(id) {
    const resultId = await this.getUserById(id);
    if (!resultId) return false;
    const [result] = await pool.query("DELETE FROM Users WHERE id = ?", [id]);
    return result.affectedRows;
  }
}

const serviceUsers = new ServiceUsers();

export default serviceUsers;