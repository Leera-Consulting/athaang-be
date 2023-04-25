module.exports = app => {
    const pettycash = require("../controllers/pettycash.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve pettycash(s)
    router.get("/", pettycash.findAll);
    router.get("/:id", pettycash.findById);

    // Edit pettycash
    router.put("/edit", pettycash.updateById);

    // Create pettycash
    router.post("/create", pettycash.insert);
  
    app.use('/api/pettycash', router);
};
