module.exports = app => {
    const travelExpense = require("../controllers/travelExpense.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve travel expenses
    router.get("/", travelExpense.findAll);
    router.get("/:id", travelExpense.findById);

    // Edit travel expense
    router.put("/edit", travelExpense.updateById);

    // Create travel expense
    router.post("/create", travelExpense.insert);
  
    app.use('/api/travelExpense', router);
};
