module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve user(s)
    router.get("/", user.findAll);
    router.get("/:id", user.findById);

    // Edit user
    router.put("/edit", user.updateById);
  
    // Create main menu
    router.post("/create", user.insert);

    // Delete
router.delete("/delete", user.delete);

    app.use('/api/user', router);
};
