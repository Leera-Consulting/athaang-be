module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve user(s)
    router.get("/", user.findAll);
    router.get("/:id", user.findById);
  
    app.use('/api/user', router);
};
