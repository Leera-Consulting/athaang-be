module.exports = app => {
    const poOrderType = require("../controllers/poOrderType.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve poOrderType(s)
    router.get("/", poOrderType.findAll);
    router.get("/:id", poOrderType.findById);

    // Edit poOrderType
    router.put("/edit", poOrderType.updateById);

    // Create poOrderType
    router.post("/create", poOrderType.insert);

    // Delete
    router.delete("/delete", poOrderType.delete);
  
    app.use('/api/poOrderType', router);
};
