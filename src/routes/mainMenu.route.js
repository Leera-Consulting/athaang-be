module.exports = app => {
    const mainMenu = require("../controllers/mainMenu.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve main menu(s)
    router.get("/", mainMenu.findAll);
    router.get("/:id", mainMenu.findById);

    // Edit main menu
    router.put("/edit", mainMenu.updateById);

    // Create main menu
    router.post("/create", mainMenu.insert);

    // Delete
router.delete("/delete", mainMenu.delete);
  
    app.use('/api/main-menu', router);
};
