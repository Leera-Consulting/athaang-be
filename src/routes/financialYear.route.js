module.exports = app => {
    const financialYear = require("../controllers/financialYear.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve financial year
    router.get("/", financialYear.findAll);
    router.get("/:id", financialYear.findById);

    // Edit financial year
    router.put("/edit", financialYear.updateById);

    // Create financial year
    router.post("/create", financialYear.insert);

    // Delete
router.delete("/delete", financialYear.delete);
  
    app.use('/api/financialYear', router);
};
