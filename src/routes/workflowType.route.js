module.exports = app => {
    const workflowType = require("../controllers/workflowType.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve workflow type(s)
    router.get("/", workflowType.findAll);
    router.get("/fetch/:id", workflowType.findById);

    // Edit workflow type
    router.put("/edit", workflowType.updateById);
  
    // Create workflow type
    router.post("/create", workflowType.insert);

    // Retrieve workflow types for Reimbursement
    router.post("/reimbursement", workflowType.findReimbursementWorkflowTypes);

    // Retreive workflow type for tender
    router.get("/tender", workflowType.fidAllTenderWorkflowTypes);

    // Retreive workflow type for purchase request
    router.get("/purchase-request", workflowType.findPurchaseRequestWorkflowTypes);

    // Delete
router.delete("/delete", workflowType.delete);

    app.use('/api/workflowType', router);
};
