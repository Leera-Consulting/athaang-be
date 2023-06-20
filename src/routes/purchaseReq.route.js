module.exports = app => {
    const purchaseReq = require("../controllers/purchaseReq.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve purchase req(s)
    router.get("/", purchaseReq.findAll);
    router.get("/fetch/:id", purchaseReq.findById);

    router.get("/filter", purchaseReq.filter);

    // Edit purchase req
    router.put("/edit", purchaseReq.updateById);

    // Create purchase req
    router.post("/create", purchaseReq.insert);

    // Delete
router.delete("/delete", purchaseReq.delete);
  
    app.use('/api/purchaseReq', router);
};
