module.exports = app => {
    const approvalMemo = require("../controllers/approvalMemo.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve approval memo(s)
    router.get("/", approvalMemo.findAll);
    router.get("/:id", approvalMemo.findById);

    // Edit approval memo
    router.put("/edit", approvalMemo.updateById);

    // Create approval memo
    router.post("/create", approvalMemo.insert);
  
    app.use('/api/approvalMemo', router);
};
