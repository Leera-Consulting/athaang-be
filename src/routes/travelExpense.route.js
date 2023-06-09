module.exports = app => {
    const travelExpense = require("../controllers/travelExpense.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve travel expenses
    router.get("/", travelExpense.findAll);
    router.get("/fetch/:id", travelExpense.findById);

    // Edit travel expense
    router.put("/edit", travelExpense.updateById);

    // Create travel expense
    router.post("/create", travelExpense.insert);

    // Retreive all reimbursements
    router.get("/reimbursement", travelExpense.getAllReimbursements)

    // Delete
router.delete("/delete", travelExpense.delete);
  
    app.use('/api/travelExpense', router);
};
