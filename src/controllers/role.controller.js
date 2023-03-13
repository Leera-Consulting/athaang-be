const Role = require('../models/role.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all roles
exports.findAll = (req, res) => {

    Role.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving roles."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a role by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Role.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving role."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};