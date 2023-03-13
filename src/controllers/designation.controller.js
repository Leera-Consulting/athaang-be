const Designation = require('../models/designation.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all designations
exports.findAll = (req, res) => {

    Designation.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving designation."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a designation type by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Designation.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving designation."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};