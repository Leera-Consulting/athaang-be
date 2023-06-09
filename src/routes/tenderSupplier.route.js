module.exports = app => {
    const tenderSupplier = require("../controllers/tenderSupplier.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve tender supplier(s)
    router.get("/", tenderSupplier.findAll);
    router.get("/:id", tenderSupplier.findById);
    router.get("/suppliers-of-tender/:tender_id", tenderSupplier.findSuppliersOfTenderHeader)

    // Edit tender supplier
    router.put("/edit", tenderSupplier.updateById);

    // Create tender supplier
    router.post("/create", tenderSupplier.insert);

    // Delete
router.delete("/delete", tenderSupplier.delete);
  
    app.use('/api/tenderSupplier', router);
};
