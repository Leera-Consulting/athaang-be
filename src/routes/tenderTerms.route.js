module.exports = app => {
    const tenderTerms = require("../controllers/tenderTerms.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve tender terms
    router.get("/", tenderTerms.findAll);
    router.get("/:id", tenderTerms.findById);

    // Edit tender terms
    router.put("/edit", tenderTerms.updateById);

    // Create tender term
    router.post("/create", tenderTerms.insert);
  
    app.use('/api/tenderTerms', router);
};
