module.exports = app => {
    const productOpenStock = require("../controllers/productOpenStock.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve productOpenStock(s)
    router.get("/", productOpenStock.findAll);
    router.get("/:id", productOpenStock.findById);

    // Edit productOpenStock
    router.put("/edit", productOpenStock.updateById);

    // Create productOpenStock
    router.post("/create", productOpenStock.insert);

    // Delete
    router.delete("/delete", productOpenStock.delete);
  
    app.use('/api/productOpenStock', router);
};
