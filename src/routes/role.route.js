module.exports = app => {
    const role = require("../controllers/role.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve role(s)
    router.get("/", role.findAll);
    router.get("/:id", role.findById);

    // Edit role
    router.put("/edit", role.updateById);

    // Create main menu
    router.post("/create", role.insert);

    // Delete
router.delete("/delete", role.delete);
  
    app.use('/api/role', router);
};
