const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",     // your DB username
  host: "localhost",
  database: "quize",    // your database name
  password: "12345",    // your DB password
  port: 5432,           // default postgres port
});

module.exports = pool;
