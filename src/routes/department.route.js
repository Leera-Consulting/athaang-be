module.exports = app => {
    const department = require("../controllers/department.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve all users
    router.get("/", department.findAll);
    router.get("/:id", department.findById);
  
    app.use('/api/department', router);
};
