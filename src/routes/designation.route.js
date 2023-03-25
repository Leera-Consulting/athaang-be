module.exports = app => {
    const designation = require("../controllers/designation.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve designation(s)
    router.get("/", designation.findAll);
    router.get("/:id", designation.findById);

    // Edit designation
    router.put("/edit", designation.updateById);

    // Create main menu
    router.post("/create", designation.insert);
  
    app.use('/api/designation', router);
};
