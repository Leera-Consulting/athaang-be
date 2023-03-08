module.exports = app => {
    const company = require("../controllers/company.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve all companies
    router.get("/", company.findAll);
    router.get("/:id", company.findById);
  
    app.use('/api/company', router);
};
