module.exports = app => {
    const term = require("../controllers/term.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve terms
    router.get("/", term.findAll);
    router.get("/:id", term.findById);

    // Edit terms
    router.put("/edit", term.updateById);

    // Create term
    router.post("/create", term.insert);

    // Delete
router.delete("/delete", term.delete);
  
    app.use('/api/term', router);
};
