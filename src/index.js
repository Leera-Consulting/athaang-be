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
require("./routes/location.route.js")(app);
require("./routes/states.route.js")(app);
require("./routes/term.route.js")(app);
require("./routes/smtpDetail.route.js")(app);
require("./routes/cities.route.js")(app);
require("./routes/help.route.js")(app);
require("./routes/financialYear.route.js")(app);
require("./routes/workflowType.route.js")(app);
require("./routes/productGroup.route.js")(app);
require("./routes/product.route.js")(app);
require("./routes/units.route.js")(app);
require("./routes/budgetName.route.js")(app);
require("./routes/budgetSubgroup.route.js")(app);
require("./routes/category.route.js")(app);
require("./routes/type.route.js")(app);
require("./routes/accountGroup.route.js")(app);
require("./routes/gstMaster.route.js")(app);
require("./routes/travelApproval.route.js")(app);
require("./routes/travelExpense.route.js")(app);
require("./routes/paymentHeader.route.js")(app);
require("./routes/pettycash.route.js")(app);
require("./routes/approvalMemo.route.js")(app);
require("./routes/purchaseOrder.route.js")(app);
require("./routes/partyMst.route.js")(app);
require("./routes/supplierInvoice.route.js")(app);
require("./routes/budget.route.js")(app);
require("./routes/budgetType.route.js")(app);
require("./routes/budgetAdjust.route.js")(app);


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