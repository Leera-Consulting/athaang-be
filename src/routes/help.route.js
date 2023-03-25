module.exports = app => {
    const help = require("../controllers/help.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve help
    router.get("/", help.findAll);
    router.get("/:id", help.findById);

    // Edit help
    router.put("/edit", help.updateById);

    // Create help
    router.post("/create", help.insert);
  
    app.use('/api/help', router);
};
