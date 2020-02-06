const config = require("config");
//Links to local modules
const { pool } = require("../database/connection");

class EmployeesHelper {
  constructor() {
    this.table = config.get("employeesTable");
  }

  async getEmployees() {
    const query = `SELECT * FROM ${this.table}`;

    const { rows } = await pool.query(query);
    return rows;
  }

  async getEmployee(id) {
    const query = `SELECT * FROM ${this.table} WHERE id = ${id}`;

    const { rows } = await pool.query(query);
    return rows;
  }

  async createEmployee(employee) {
    const values = [...employee];
    const query = `INSERT INTO ${this.table}(name, code, profession, color, 
                  city, branch, assigned) 
                  VALUES($1, $2, $3, $4, $5, $6, $7)`;

    await pool.query(query, values);
  }

  async updateEmployee(updatedEmployee) {
    const values = [...updatedEmployee];

    const query = `UPDATE ${this.table} 
                  SET name = $1, code = $2, profession = $3, color = $4, 
                  city = $5, branch = $6, assigned = $7 
                  WHERE id = $8`;

    await pool.query(query, values);
  }

  async deleteEmployee(id) {
    const query = `DELETE FROM employees WHERE id = ${id}`;

    await pool.query(query);
  }
}

module.exports = EmployeesHelper;
