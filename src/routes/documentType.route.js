module.exports = app => {
    const documentType = require("../controllers/documentType.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve all users
    router.get("/", documentType.findAll);
    router.get("/:id", documentType.findById);
  
    app.use('/api/document-type', router);
};
