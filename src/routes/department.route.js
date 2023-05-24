module.exports = app => {
    const department = require("../controllers/department.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve department(s)
    router.get("/", department.findAll);
    router.get("/fetch/:id", department.findById);

    // Edit department
    router.put("/edit", department.updateById);

    // Create department
    router.post("/create", department.insert);
  
    app.use('/api/department', router);
};
