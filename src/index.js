const express = require("express");
const cors = require('cors');
const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())

app.use(express.json());

// setup routes for apis
require("./routes/user.route.js")(app);
require("./routes/department.route.js")(app);
require("./routes/role.route.js")(app);
require("./routes/designation.route.js")(app);
require("./routes/mainMenu.route.js")(app);
require("./routes/menu.route.js")(app);
require("./routes/documentType.route.js")(app);
require("./routes/company.route.js")(app);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', `${process.env.HOST_URL}/${process.env.PORT}`);
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});