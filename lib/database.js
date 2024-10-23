const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // You can store this in a .env file
  ssl: {
    rejectUnauthorized: false, // required for secure connections on Vercel
  },
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
