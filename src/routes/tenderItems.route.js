module.exports = app => {
    const tenderItems = require("../controllers/tenderItems.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve tender Items
    router.get("/", tenderItems.findAll);
    router.get("/:id", tenderItems.findById);
    router.get("/items-of-tender/:tender_id", tenderItems.findItemsOfTenderHeader)

    // Edit tender Items
    router.put("/edit", tenderItems.updateById);

    // Create tender term
    router.post("/create", tenderItems.insert);

    // Delete
router.delete("/delete", tenderItems.delete);
  
    app.use('/api/tenderItems', router);
};
