module.exports = app => {
    const approvalDetails = require("../controllers/approvalDetails.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve approval detail(s)
    router.get("/", approvalDetails.findAll);
    router.get("/:id", approvalDetails.findById);

    // Edit approval detail
    router.put("/edit", approvalDetails.updateById);

    // Create approval detail
    router.post("/create", approvalDetails.insert);

    // Delete
    router.delete("/delete", approvalDetails.delete);
  
    app.use('/api/approvalDetails', router);
};
