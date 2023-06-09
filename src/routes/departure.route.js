module.exports = app => {
    const departure = require("../controllers/departure.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve departure(s)
    router.get("/", departure.findAll);
    router.get("/:id", departure.findById);
    router.get("/approval_ref_no/:te_id", departure.findByApprovalRefNo);

    // Edit departure
    router.put("/edit", departure.updateById);

    // Create departure
    router.post("/create", departure.insert);

    // Delete
router.delete("/delete", departure.delete);
  
    app.use('/api/departure', router);
};
