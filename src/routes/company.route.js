module.exports = app => {
    const company = require("../controllers/company.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve company(ies)
    router.get("/", company.findAll);
    router.get("/:id", company.findById);

    // Edit company
    router.put("/edit", company.updateById);

        // Create company
        router.post("/create", company.insert);
  
    app.use('/api/company', router);
};
