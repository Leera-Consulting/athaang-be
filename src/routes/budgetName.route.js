module.exports = app => {
    const budgetName = require("../controllers/budgetName.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve budget name(s)
    router.get("/", budgetName.findAll);
    router.get("/:id", budgetName.findById);

    // Edit budget names
    router.put("/edit", budgetName.updateById);

    // Create budget names
    router.post("/create", budgetName.insert);
  
    app.use('/api/budgetName', router);
};
