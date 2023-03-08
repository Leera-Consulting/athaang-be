module.exports = app => {
    const department = require("../controllers/department.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve department(s)
    router.get("/", department.findAll);
    router.get("/:id", department.findById);
  
    app.use('/api/department', router);
};
