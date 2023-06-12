module.exports = app => {
    const supplierInvoiceDetails = require("../controllers/supplierInvoiceDetails.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve supplierInvoiceDetails(s)
    router.get("/", supplierInvoiceDetails.findAll);
    router.get("/:id", supplierInvoiceDetails.findById);

    // Edit supplierInvoiceDetails
    router.put("/edit", supplierInvoiceDetails.updateById);

    // Create supplierInvoiceDetails
    router.post("/create", supplierInvoiceDetails.insert);

    // Delete
    router.delete("/delete", supplierInvoiceDetails.delete);
  
    app.use('/api/supplierInvoiceDetails', router);
};
