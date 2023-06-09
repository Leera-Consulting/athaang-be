module.exports = app => {
    const useraccess = require("../controllers/useraccess.controller.js");
  
    const router = require("express").Router();
  
    // Retrieve useraccess(s)
    router.get("/", useraccess.findAll);
    router.get("/fetch/:id", useraccess.findById);

    // Edit useraccess
    router.put("/edit", useraccess.updateById);

    // Bulk Edit useraccess
    router.put("/bulk-edit", useraccess.bulkUpdateById);
  
    // Create useraccess
    router.post("/create", useraccess.insert);

    // Retrieve useraccess of a user role
    router.get("/user-role/:user_role", useraccess.findUseraccessOfUserRole);

    // Delete
router.delete("/delete", useraccess.delete);

    app.use('/api/useraccess', router);
};
