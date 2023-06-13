module.exports = app => {
    const comment = require("../controllers/comment.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve comment
    router.get("/", comment.findAll);
    router.get("/:id", comment.findById);
    router.get("/travel-expense/:te_id", comment.findCommentsForTravelExpense)
    router.get("/supplier-invoice/:si_id", comment.findCommentsForSupplierInvoice)
    router.get("/approval-memo/:ap_id", comment.findCommentsForApprovalMemo)

    // Edit comment
    router.put("/edit", comment.updateById);

    // Create comment
    router.post("/create", comment.insert);

    // Delete
router.delete("/delete", comment.delete);
  
    app.use('/api/comment', router);
};
