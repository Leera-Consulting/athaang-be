module.exports = app => {
    const gstMaster = require("../controllers/gstMaster.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve gstMaster(s)
    router.get("/", gstMaster.findAll);
    router.get("/:id", gstMaster.findById);

    // Edit gstMaster
    router.put("/edit", gstMaster.updateById);

    // Create gstMaster
    router.post("/create", gstMaster.insert);

    // Delete
router.delete("/delete", gstMaster.delete);
  
    app.use('/api/gstMaster', router);
};
