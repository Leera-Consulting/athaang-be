module.exports = app => {
    const auditJobDetails = require("../controllers/auditJobDetails.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve auditJobDetails(s)
    router.get("/", auditJobDetails.findAll);
    router.get("/fetch/:id", auditJobDetails.findById);

    // Retrieve auditjobdetails from header id
    router.get("/header/:audit_job_hdr_id", auditJobDetails.findByHeaderId);

    // Edit auditJobDetails
    router.put("/edit", auditJobDetails.updateById);

    // Create auditJobDetails
    router.post("/create", auditJobDetails.insert);

    // Delete
    router.delete("/delete", auditJobDetails.delete);
  
    app.use('/api/auditJobDetails', router);
};
