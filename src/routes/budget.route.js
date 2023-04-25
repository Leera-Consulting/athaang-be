module.exports = app => {
    const budget = require("../controllers/budget.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve budget(s)
    router.get("/", budget.findAll);
    router.get("/:id", budget.findById);

    // Edit budget
    router.put("/edit", budget.updateById);

    // Create budget
    router.post("/create", budget.insert);
  
    app.use('/api/budget', router);
};
