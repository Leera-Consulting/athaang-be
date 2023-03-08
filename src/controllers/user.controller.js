const User = require('../models/user.model');

// Responses for fetching all users
exports.findAll = (req, res) => {
  
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          success: false,
          message: err.message || "Some error occurred while retrieving users."
        });
      else res.status(200).send({
        success: true,
        data: data
      });
    });
};

// Responses for fetching a user by id
exports.findById = (req, res) => {

  const { id } = req.params;

  User.findById(id, (err, data) => {
    if (err)
      res.status(500).send({
        success: false,
        message: err.message || "Some error occurred while retrieving user."
      });
    else res.status(200).send({
      success: true,
      data: data
    })
  })
};