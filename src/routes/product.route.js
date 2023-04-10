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
  
    app.use('/api/product', router);
};
