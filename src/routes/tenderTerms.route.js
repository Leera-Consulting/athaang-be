module.exports = app => {
    const tenderTerms = require("../controllers/tenderTerms.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve tender terms
    router.get("/", tenderTerms.findAll);
    router.get("/:id", tenderTerms.findById);
    router.get("/terms-of-tender/:tender_id", tenderTerms.findTermsOfTenderHeader)

    // Edit tender terms
    router.put("/edit", tenderTerms.updateById);

    // Create tender term
    router.post("/create", tenderTerms.insert);

    // Delete
router.delete("/delete", tenderTerms.delete);
  
    app.use('/api/tenderTerms', router);
};
