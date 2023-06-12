module.exports = app => {
    const approvalItems = require("../controllers/approvalItems.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve approval item(s)
    router.get("/", approvalItems.findAll);
    router.get("/:id", approvalItems.findById);

    // Edit approval item
    router.put("/edit", approvalItems.updateById);

    // Create approval item
    router.post("/create", approvalItems.insert);

    // Delete
    router.delete("/delete", approvalItems.delete);
  
    app.use('/api/approvalItems', router);
};
