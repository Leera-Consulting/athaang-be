module.exports = app => {
    const menu = require("../controllers/menu.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve menu(s)
    router.get("/", menu.findAll);
    router.get("/:id", menu.findById);

    // Edit menu
    router.put("/edit", menu.updateById);

    // Create main menu
    router.post("/create", menu.insert);

    // Delete
router.delete("/delete", menu.delete);
  
    app.use('/api/menu', router);
};
