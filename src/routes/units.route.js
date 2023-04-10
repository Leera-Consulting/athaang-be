module.exports = app => {
    const units = require("../controllers/units.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve units(s)
    router.get("/", units.findAll);
    router.get("/:id", units.findById);

    // Edit units
    router.put("/edit", units.updateById);

    // Create units
    router.post("/create", units.insert);
  
    app.use('/api/units', router);
};
