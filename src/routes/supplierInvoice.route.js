module.exports = app => {
    const supplierInvoice = require("../controllers/supplierInvoice.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve supplier invoice(s)
    router.get("/", supplierInvoice.findAll);
    router.get("/:id", supplierInvoice.findById);

    // Edit supplier invoice
    router.put("/edit", supplierInvoice.updateById);

    // Create supplier invoice
    router.post("/create", supplierInvoice.insert);
  
    app.use('/api/supplierInvoice', router);
};
