module.exports = app => {
    const paymentHeader = require("../controllers/paymentHeader.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve payment header(s)
    router.get("/", paymentHeader.findAll);
    router.get("/:id", paymentHeader.findById);

    // Edit payment header
    router.put("/edit", paymentHeader.updateById);

    // Create payment header
    router.post("/create", paymentHeader.insert);
  
    app.use('/api/paymentHeader', router);
};
