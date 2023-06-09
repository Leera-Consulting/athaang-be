module.exports = app => {
    const smtpDetail = require("../controllers/smtpDetail.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve smtpDetail
    router.get("/", smtpDetail.findAll);
    router.get("/:id", smtpDetail.findById);

    // Edit smtpDetail
    router.put("/edit", smtpDetail.updateById);

    // Create smtpDetail
    router.post("/create", smtpDetail.insert);

    // Delete
router.delete("/delete", smtpDetail.delete);
  
    app.use('/api/smtpDetail', router);
};
