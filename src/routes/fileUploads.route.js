module.exports = app => {
    const fileUploads = require("../controllers/fileUploads.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve file upload(s)
    router.get("/", fileUploads.findAll);
    router.get("/:id", fileUploads.findById);

    // Edit file upload
    router.put("/edit", fileUploads.updateById);
  
    // Create file upload
    router.post("/create", fileUploads.insert);

    // Retrieve travel approval file uploads
    router.get("/ta/:ta_id", fileUploads.findTravelApprovalFileUploads)

    // Retrieve reimbursement file uploads
    router.get("/re/:re_id", fileUploads.findReimbursementFileUploads)

    // Retrieve supplier invoice file uploads
    router.get("/si/:si_id", fileUploads.findSupplierInvoiceFileUploads)

    // Retrieve travel approval file uploads
    router.get("/te/:te_id", fileUploads.findTravelExpensesFileUploads)

    // Delete
router.delete("/delete", fileUploads.delete);

    app.use('/api/fileUploads', router);
};
