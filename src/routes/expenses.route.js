module.exports = app => {
    const expenses = require("../controllers/expenses.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve file upload(s)
    router.get("/", expenses.findAll);
    router.get("/:id", expenses.findById);
    router.get("/approval_ref_no/:te_id", expenses.findTravelExpenseByApprovalRefNo);

    // Edit expense
    router.put("/edit", expenses.updateById);
  
    // Create expense
    router.post("/create", expenses.insert);

    app.use('/api/expenses', router);
};
