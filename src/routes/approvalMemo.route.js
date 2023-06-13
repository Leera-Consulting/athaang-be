module.exports = app => {
    const approvalMemo = require("../controllers/approvalMemo.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve approval memo(s)
    router.get("/", approvalMemo.findAll);
    router.get("/fetch/:id", approvalMemo.findById);

    router.get("/filter", approvalMemo.filter);

    // Edit approval memo
    router.put("/edit", approvalMemo.updateById);

    // Create approval memo
    router.post("/create", approvalMemo.insert);

    // Delete
    router.delete("/delete", approvalMemo.delete);
  
    app.use('/api/approvalMemo', router);
};
