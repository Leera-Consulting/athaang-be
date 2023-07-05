module.exports = app => {
    const goodsIssueNoteItems = require("../controllers/goodsIssueNoteItems.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve goodsIssueNoteItems(s)
    router.get("/", goodsIssueNoteItems.findAll);
    router.get("/gin/:id", goodsIssueNoteItems.findByGinId);

    // Edit goodsIssueNoteItems
    router.put("/edit", goodsIssueNoteItems.updateById);

    // Create goodsIssueNoteItems
    router.post("/create", goodsIssueNoteItems.insert);

    // Delete
    router.delete("/delete", goodsIssueNoteItems.delete);
  
    app.use('/api/goodsIssueNoteItems', router);
};
