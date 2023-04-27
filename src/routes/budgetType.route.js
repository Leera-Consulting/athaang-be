module.exports = app => {
    const budgetType = require("../controllers/budgetType.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve budget type(s)
    router.get("/", budgetType.findAll);
    router.get("/:id", budgetType.findById);

    // Edit budget subgroups
    router.put("/edit", budgetType.updateById);

    // Create budget subgroups
    router.post("/create", budgetType.insert);
  
    app.use('/api/budgetType', router);
};
