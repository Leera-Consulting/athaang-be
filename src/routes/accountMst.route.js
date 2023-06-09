module.exports = app => {
    const accountMst = require("../controllers/accountMst.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve account master(s)
    router.get("/", accountMst.findAll);
    router.get("/bank", accountMst.findAllBanks);
    router.get("/:id", accountMst.findById);

    // Edit account master
    router.put("/edit", accountMst.updateById);

    // Create account master
    router.post("/create", accountMst.insert);

    // Delete
    router.delete("/delete", accountMst.delete);
  
    app.use('/api/accountMst', router);
};
