const mysql = require("mysql");
const dbConfig = require("../../config/db.config.js");
const db = require("./establishDB");

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  multipleStatements: true,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");

  // create tables and fill dummy data
  // db.init(connection);
  // db.dummyData(connection);
});

module.exports = connection;
