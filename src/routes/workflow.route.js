module.exports = app => {
    const workflow = require("../controllers/workflow.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve workflow(s)
    router.get("/", workflow.findAll);
    router.get("/fetch/:id", workflow.findById);

    router.get("/filter", workflow.filter);

    // Edit workflow
    router.put("/edit", workflow.updateById);

    // Create workflow
    router.post("/create", workflow.insert);

    // Delete
    router.delete("/delete", workflow.delete);
  
    app.use('/api/workflow', router);
};
