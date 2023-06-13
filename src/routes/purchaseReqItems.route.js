module.exports = app => {
    const purchaseReqItems = require("../controllers/purchaseReqItems.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve purchase req item(s)
    router.get("/", purchaseReqItems.findAll);
    router.get("/fetch/:id", purchaseReqItems.findById);
    router.get("/purchase-req/:id", purchaseReqItems.findByPurchaseReq);

    // Edit purchase req item
    router.put("/edit", purchaseReqItems.updateById);

    // Create purchase req item
    router.post("/create", purchaseReqItems.insert);

    // Delete
    router.delete("/delete", purchaseReqItems.delete);
  
    app.use('/api/purchaseReqItems', router);
};
