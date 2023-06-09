module.exports = app => {
    const partyMst = require("../controllers/partyMst.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve party-mst(s)
    router.get("/", partyMst.findAll);
    router.get("/:id", partyMst.findById);

    // Edit party-mst
    router.put("/edit", partyMst.updateById);

    // Create party-mst
    router.post("/create", partyMst.insert);

    // Delete
router.delete("/delete", partyMst.delete);
  
    app.use('/api/partyMst', router);
};
