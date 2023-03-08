module.exports = app => {
    const menu = require("../controllers/menu.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve menu(s)
    router.get("/", menu.findAll);
    router.get("/:id", menu.findById);
  
    app.use('/api/menu', router);
};
