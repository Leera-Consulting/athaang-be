const express = require("express");
const cors = require('cors');
const mysql = require("mysql");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())

const connection = mysql.createConnection({
    user: 'root',
    password: 'admin@123',
    server: 'localhost', 
    database: 'symphzia_athaangp2p' ,
    port: 3306
});

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
});

app.use(express.json());

require("./routes/user.route.js")(app);
require("./routes/department.route.js")(app);
require("./routes/role.route.js")(app);
require("./routes/designation.route.js")(app);
require("./routes/mainMenu.route.js")(app);
require("./routes/menu.route.js")(app);
require("./routes/documentType.route.js")(app);
require("./routes/company.route.js")(app);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// api routes
// app.use('/api/user', userRouter);


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});