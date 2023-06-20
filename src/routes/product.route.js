module.exports = app => {
    const product = require("../controllers/product.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve product(s)
    router.get("/", product.findAll);
    router.get("/:id", product.findById);

    // Edit product
    router.put("/edit", product.updateById);

    // Create product
    router.post("/create", product.insert);

    // Delete
    router.delete("/delete", product.delete);
  
    app.use('/api/product', router);
};
