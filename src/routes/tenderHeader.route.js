module.exports = app => {
    const tenderHeader = require("../controllers/tenderHeader.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve tender header(s)
    router.get("/", tenderHeader.findAll);
    router.get("/fetch/:id", tenderHeader.findById);

    // Edit tender header
    router.put("/edit", tenderHeader.updateById);

    // Create tender header
    router.post("/create", tenderHeader.insert);

    // Get supplier party of tender supplier
    router.get("/tenderSupplierParty", tenderHeader.tenderSupplierParty)

    // Get quote party of tender supplier
    router.get("/quoteSupplierParty", tenderHeader.quoteSupplierParty)

    // Delete
router.delete("/delete", tenderHeader.delete);
  
    app.use('/api/tenderHeader', router);
};
