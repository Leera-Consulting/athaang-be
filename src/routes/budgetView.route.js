module.exports = app => {
    const budgetView = require("../controllers/budgetView.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve budget view(s)
    router.get("/", budgetView.findAll);
    router.get("/fetch/:id", budgetView.findById);
    router.post("/budget-transaction", budgetView.findBudgetTransaction);

    // Edit budget view
    router.put("/edit", budgetView.updateById);

    // Create budget view
    router.post("/create", budgetView.insert);
  
    app.use('/api/budgetView', router);
};
