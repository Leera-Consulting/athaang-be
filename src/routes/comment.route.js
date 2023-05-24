module.exports = app => {
    const comment = require("../controllers/comment.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve comment
    router.get("/", comment.findAll);
    router.get("/:id", comment.findById);
    router.get("/travel-expense/:te_id", comment.findCommentsForTravelExpense)

    // Edit comment
    router.put("/edit", comment.updateById);

    // Create comment
    router.post("/create", comment.insert);
  
    app.use('/api/comment', router);
};
