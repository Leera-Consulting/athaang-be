module.exports = app => {
    const mainMenu = require("../controllers/mainMenu.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve all users
    router.get("/", mainMenu.findAll);
    router.get("/:id", mainMenu.findById);
  
    app.use('/api/main-menu', router);
};
