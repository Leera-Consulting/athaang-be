module.exports = app => {
    const workflowHistory = require("../controllers/workflowHistory.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve workflow history(s)
    router.get("/", workflowHistory.findAll);
    router.get("/:id", workflowHistory.findById);

    // Edit workflow history
    router.put("/edit", workflowHistory.updateById);
  
    // Create workflow history
    router.post("/create", workflowHistory.insert);

    // Retrieve workflow history(s)
    router.get("/document/:doc_id", workflowHistory.findWorkflowHistoryOfDocument);

    // Retrieve workflow history for Reimbursement
    router.get("/travelexpense/:te_id", workflowHistory.findTravelExpenseWorkhistory);

    // Retrieve workflow history for Reimbursement
    router.get("/reimbursement/:re_id", workflowHistory.findReimbursementWorkhistory);

    // Retrieve workflow history for supplier invoice
    router.get("/supplier-invoice/:si_id", workflowHistory.findSupplierInvoiceWorkflowTypes);

    // Delete
router.delete("/delete", workflowHistory.delete);

    app.use('/api/workflowHistory', router);
};
