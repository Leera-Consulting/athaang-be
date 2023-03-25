module.exports = app => {
    const states = require("../controllers/states.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve states
    router.get("/", states.findAll);
    router.get("/:id", states.findById);

    // Edit states
    router.put("/edit", states.updateById);

    // Create states
    router.post("/create", states.insert);
  
    app.use('/api/states', router);
};
