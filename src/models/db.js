const mysql = require("mysql");

const connection = mysql.createPool({
    user: 'root',
    password: 'admin@123',
    server: 'localhost', 
    database: 'symphzia_athaangp2p' ,
    port: 3306
});
  
module.exports = connection;