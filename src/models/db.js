const mysql = require("mysql");

// setup connection to mysql server
const connection = mysql.createPool({
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_SERVER, 
    database: process.env.SQL_DATABASE,
    port: process.env.SQL_PORT
});
  
module.exports = connection;