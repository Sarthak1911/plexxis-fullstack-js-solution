const { Pool } = require("pg");
const config = require("config");

const pool = new Pool({
  connectionString: config.get("connectionString")
});

async function connectToDB() {
  try {
    await pool.connect();
    console.log("Connected to PostgresDB");
  } catch (ex) {
    console.log(ex.message);
  }
}

module.exports.connectToDB = connectToDB;
module.exports.pool = pool;
