module.exports = app => {
    const workflowType = require("../controllers/workflowType.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve workflow type(s)
    router.get("/", workflowType.findAll);
    router.get("/:id", workflowType.findById);

    // Edit workflow type
    router.put("/edit", workflowType.updateById);
  
    // Create workflow type
    router.post("/create", workflowType.insert);

    app.use('/api/workflowType', router);
};
