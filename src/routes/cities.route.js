module.exports = app => {
    const cities = require("../controllers/cities.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve cities
    router.get("/", cities.findAll);
    router.get("/:id", cities.findById);

    // Edit cities
    router.put("/edit", cities.updateById);

    // Create cities
    router.post("/create", cities.insert);

    // Delete
router.delete("/delete", cities.delete);
  
    app.use('/api/cities', router);
};
