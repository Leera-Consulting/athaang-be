module.exports = app => {
    const tenderFileUpload = require("../controllers/tenderFileUpload.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve tender file upload
    router.get("/", tenderFileUpload.findAll);
    router.get("/:id", tenderFileUpload.findById);
    router.get("/files-of-tender/:tender_id", tenderFileUpload.findFileUploadOfTenderHeader)

    // Edit tender file upload
    router.put("/edit", tenderFileUpload.updateById);

    // Create tender file upload
    router.post("/create", tenderFileUpload.insert);

    // Delete
router.delete("/delete", tenderFileUpload.delete);
  
    app.use('/api/tenderFileUpload', router);
};
