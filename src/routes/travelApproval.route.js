module.exports = app => {
    const travelApproval = require("../controllers/travelApproval.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve travel approvals
    router.get("/", travelApproval.findAll);
    router.get("/:id", travelApproval.findById);
    router.get("/findAppovalRefNo/:user_id", travelApproval.findAppovalRefNo);

    // Edit travel approval
    router.put("/edit", travelApproval.updateById);

    // Create travel approval
    router.post("/create", travelApproval.insert);

    // Delete
router.delete("/delete", travelApproval.delete);
  
    app.use('/api/travelApproval', router);
};
