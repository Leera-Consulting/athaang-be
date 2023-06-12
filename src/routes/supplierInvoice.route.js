module.exports = app => {
    const supplierInvoice = require("../controllers/supplierInvoice.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve supplier invoice(s)
    router.get("/", supplierInvoice.findAll);
    router.get("/fetch/:id", supplierInvoice.findById);

    router.get("/filter", supplierInvoice.filter);

    // Edit supplier invoice
    router.put("/edit", supplierInvoice.updateById);

    // Create supplier invoice
    router.post("/create", supplierInvoice.insert);

    // Delete
router.delete("/delete", supplierInvoice.delete);
  
    app.use('/api/supplierInvoice', router);
};
