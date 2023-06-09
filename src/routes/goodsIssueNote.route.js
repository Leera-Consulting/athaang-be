module.exports = app => {
    const goodsIssueNote = require("../controllers/goodsIssueNote.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve goodsIssueNote(s)
    router.get("/", goodsIssueNote.findAll);
    router.get("/:id", goodsIssueNote.findById);

    // Edit goodsIssueNote
    router.put("/edit", goodsIssueNote.updateById);

    // Create goodsIssueNote
    router.post("/create", goodsIssueNote.insert);

    // Delete
router.delete("/delete", goodsIssueNote.delete);
  
    app.use('/api/goodsIssueNote', router);
};
