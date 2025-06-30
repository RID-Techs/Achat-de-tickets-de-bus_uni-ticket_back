const postgres = require("postgres");

if(!process.env.DB_HOST) {
  throw new Error("Missing DB_HOST");
}
if (!process.env.DB_USER) {
  throw new Error("Missing DB_USER");
}
if (!process.env.DB_PASSWORD) {
  throw new Error("Missing DB_PASSWORD");
}
if (!process.env.DB_PORT) {
  throw new Error("Missing DB_PORT");
}
if (!process.env.DB_NAME) {
  throw new Error("Missing DB_NAME");
}

const sql = postgres(`postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

module.exports = sql;
