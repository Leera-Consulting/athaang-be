const Company = require('../models/company.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all companies
exports.findAll = (req, res) => {

    Company.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving companies."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a company by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Company.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving company."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};