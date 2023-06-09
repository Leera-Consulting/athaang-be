module.exports = app => {
    const budgetAdjust = require("../controllers/budgetAdjust.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve budget adjust(s)
    router.get("/", budgetAdjust.findAll);
    router.get("/:id", budgetAdjust.findById);

    // Edit budget adjust
    router.put("/edit", budgetAdjust.updateById);

    // Create budget adjust
    router.post("/create", budgetAdjust.insert);

    // Delete
router.delete("/delete", budgetAdjust.delete);
  
    app.use('/api/budgetAdjust', router);
};
