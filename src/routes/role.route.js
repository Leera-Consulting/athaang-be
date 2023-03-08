module.exports = app => {
    const role = require("../controllers/role.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve role(s)
    router.get("/", role.findAll);
    router.get("/:id", role.findById);
  
    app.use('/api/role', router);
};
