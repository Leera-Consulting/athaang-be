module.exports = app => {
    const location = require("../controllers/location.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve locations
    router.get("/", location.findAll);
    router.get("/:id", location.findById);

    // Edit location
    router.put("/edit", location.updateById);

    // Create location
    router.post("/create", location.insert);

    // Delete
router.delete("/delete", location.delete);
  
    app.use('/api/location', router);
};
