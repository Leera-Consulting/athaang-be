module.exports = app => {
    const budgetSubgroup = require("../controllers/budgetSubgroup.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve budget subgroups(s)
    router.get("/", budgetSubgroup.findAll);
    router.get("/:id", budgetSubgroup.findById);

    // Edit budget subgroups
    router.put("/edit", budgetSubgroup.updateById);

    // Create budget subgroups
    router.post("/create", budgetSubgroup.insert);

    // Delete
router.delete("/delete", budgetSubgroup.delete);
  
    app.use('/api/budgetSubgroup', router);
};
