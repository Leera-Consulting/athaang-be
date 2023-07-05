module.exports = app => {
    const productGroup = require("../controllers/productGroup.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve productGroup(s)
    router.get("/", productGroup.findAll);
    router.get("/fetch/:id", productGroup.findById);

    // Retrieve productGroup for goods issue note
    router.get("/gin", productGroup.findProductGroupForGIN);

    // Edit productGroup
    router.put("/edit", productGroup.updateById);

    // Create productGroup
    router.post("/create", productGroup.insert);

    // Delete
router.delete("/delete", productGroup.delete);
  
    app.use('/api/productGroup', router);
};
