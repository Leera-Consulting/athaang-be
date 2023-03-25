const User = require('../models/user.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all users
exports.findAll = (req, res) => {
  
    User.getAll((err, data) => {
      if (err)  {
        const sqlErrorMessage = handleSqlErrorMessage(err);

        res.status(500).send({
          success: false,
          message: sqlErrorMessage || "Some error occurred while retrieving users."
        });
      } else  {
        res.status(200).send({
          success: true,
          data: data
        });
      } 
    });
};

// Responses for fetching a user by id
exports.findById = (req, res) => {

  const { id } = req.params;

  User.findById(id, (err, data) => {
    if (err) {
      const sqlErrorMessage = handleSqlErrorMessage(err);

      res.status(500).send({
        success: false,
        message: sqlErrorMessage || "Some error occurred while retrieving user."
      });
    }
    else res.status(200).send({
      success: true,
      data: data
    })
  })
};

// Edit user by id
exports.updateById = (req, res) => {
  const requestBody = req.body;

  User.updateById(requestBody, (err, data) => {
      if (err)    {
          const sqlErrorMessage = handleSqlErrorMessage(err);

          res.status(500).send({
              success: false,
              message: sqlErrorMessage || "Some error occurred while editing user."
          })
      } else {
          res.status(200).send({
              success: true,
              data: data
          })
      }
  })
}

// Insert main menu by id
exports.insert = (req, res) => {
  const requestBody = req.body;

  User.insert(requestBody, (err, data) => {
      if (err)    {
          const sqlErrorMessage = handleSqlErrorMessage(err);

          res.status(500).send({
              success: false,
              message: sqlErrorMessage || "Some error occurred while editing main menu."
          })
      } else {
          res.status(200).send({
              success: true,
              data: data
          })
      }
  })
}