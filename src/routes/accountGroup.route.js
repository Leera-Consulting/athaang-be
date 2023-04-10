module.exports = app => {
    const accountGroup = require("../controllers/accountGroup.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve account group(s)
    router.get("/", accountGroup.findAll);
    router.get("/:id", accountGroup.findById);

    // Edit account group
    router.put("/edit", accountGroup.updateById);

    // Create account group
    router.post("/create", accountGroup.insert);
  
    app.use('/api/accountGroup', router);
};
