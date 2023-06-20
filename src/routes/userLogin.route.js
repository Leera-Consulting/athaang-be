module.exports = app => {
    const userLogin = require("../controllers/userLogin.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve user(s)
    router.get("/", userLogin.findAll);
    router.get("/:id", userLogin.findById);

    // Edit user
    router.put("/edit", userLogin.updateById);
  
    // Create main menu
    router.post("/create", userLogin.insert);

    // Delete
    router.delete("/delete", userLogin.delete);

    app.use('/api/userLogin', router);
};
