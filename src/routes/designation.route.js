module.exports = app => {
    const designation = require("../controllers/designation.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve all users
    router.get("/", designation.findAll);
    router.get("/:id", designation.findById);
  
    app.use('/api/designation', router);
};