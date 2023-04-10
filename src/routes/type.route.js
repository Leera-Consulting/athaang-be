module.exports = app => {
    const type = require("../controllers/type.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve type(s)
    router.get("/", type.findAll);
    router.get("/:id", type.findById);

    // Edit type
    router.put("/edit", type.updateById);

    // Create type
    router.post("/create", type.insert);
  
    app.use('/api/type', router);
};
