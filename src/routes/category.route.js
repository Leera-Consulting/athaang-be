module.exports = app => {
    const category = require("../controllers/category.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve category(s)
    router.get("/", category.findAll);
    router.get("/:id", category.findById);

    // Edit category
    router.put("/edit", category.updateById);

    // Create category
    router.post("/create", category.insert);
  
    app.use('/api/category', router);
};
