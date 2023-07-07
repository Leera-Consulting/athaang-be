module.exports = app => {
    const auditJobHeader = require("../controllers/auditJobHeader.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve auditJobHeader(s)
    router.get("/", auditJobHeader.findAll);
    router.get("/:id", auditJobHeader.findById);

    // Edit auditJobHeader
    router.put("/edit", auditJobHeader.updateById);

    // Create auditJobHeader
    router.post("/create", auditJobHeader.insert);

    // Delete
    router.delete("/delete", auditJobHeader.delete);
  
    app.use('/api/auditJobHeader', router);
};
