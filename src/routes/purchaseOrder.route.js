module.exports = app => {
    const purchaseOrder = require("../controllers/purchaseOrder.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve purchase order(s)
    router.get("/", purchaseOrder.findAll);
    router.get("/:id", purchaseOrder.findById);

    // Edit purchase order
    router.put("/edit", purchaseOrder.updateById);

    // Create purchase order
    router.post("/create", purchaseOrder.insert);
  
    app.use('/api/purchaseOrder', router);
};
