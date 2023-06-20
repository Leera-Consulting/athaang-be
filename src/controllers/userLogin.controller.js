const UserLogin = require('../models/userLogin.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all UserLogin
exports.findAll = (req, res) => {
  
    UserLogin.getAll((err, data) => {
      if (err)  {
        const sqlErrorMessage = handleSqlErrorMessage(err);

        res.status(500).send({
          success: false,
          message: sqlErrorMessage || "Some error occurred while retrieving UserLogin."
        });
      } else  {
        res.status(200).send({
          success: true,
          data: data
        });
      } 
    });
};

// Responses for fetching a UserLogin by id
exports.findById = (req, res) => {

  const { id } = req.params;

  UserLogin.findById(id, (err, data) => {
    if (err) {
      const sqlErrorMessage = handleSqlErrorMessage(err);

      res.status(500).send({
        success: false,
        message: sqlErrorMessage || "Some error occurred while retrieving UserLogin."
      });
    }
    else res.status(200).send({
      success: true,
      data: data
    })
  })
};

// Edit UserLogin by id
exports.updateById = (req, res) => {
  const requestBody = req.body;

  UserLogin.updateById(requestBody, (err, data) => {
      if (err)    {
          const sqlErrorMessage = handleSqlErrorMessage(err);

          res.status(500).send({
              success: false,
              message: sqlErrorMessage || "Some error occurred while editing UserLogin."
          })
      } else {
          res.status(200).send({
              success: true,
              data: data
          })
      }
  })
}

// Insert UserLogin by id
exports.insert = (req, res) => {
  const requestBody = req.body;

  UserLogin.insert(requestBody, (err, data) => {
      if (err)    {
          const sqlErrorMessage = handleSqlErrorMessage(err);

          res.status(500).send({
              success: false,
              message: sqlErrorMessage || "Some error occurred while editing UserLogin."
          })
      } else {
          res.status(200).send({
              success: true,
              data: data
          })
      }
  })
}

// Delete 
exports.delete = (req, res) => {
  const requestBody = req.body;

  UserLogin.delete(requestBody, (err, data) => {
      if (err)    {
          const sqlErrorMessage = handleSqlErrorMessage(err);

          res.status(500).send({
              success: false,
              message: sqlErrorMessage || "Some error occurred while deleting."
          })
      } else {
          res.status(200).send({
              success: true,
              data: data
          })
      }
  })
}