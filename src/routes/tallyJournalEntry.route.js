module.exports = app => {
    const tallyJournalEntry = require("../controllers/tallyJournalEntry.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve tallyJournalEntry
    router.get("/", tallyJournalEntry.findAll);
    router.get("/:id", tallyJournalEntry.findById);
    router.get("/travel-expense/:te_id", tallyJournalEntry.findForTravelExpense)
    router.get("/supplier-invoice/:si_id", tallyJournalEntry.findForSupplierInvoice)

    // Edit tallyJournalEntry
    router.put("/edit", tallyJournalEntry.updateById);

    // Create tallyJournalEntry
    router.post("/create", tallyJournalEntry.insert);

    // Delete
router.delete("/delete", tallyJournalEntry.delete);
  
    app.use('/api/tallyJournalEntry', router);
};
