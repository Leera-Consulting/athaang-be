module.exports = app => {
    const documentType = require("../controllers/documentType.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve document type(s)
    router.get("/", documentType.findAll);
    router.get("/:id", documentType.findById);

    // Edit document type
    router.put("/edit", documentType.updateById);

    // Create main menu
    router.post("/create", documentType.insert);
  
    app.use('/api/document-type', router);
};
