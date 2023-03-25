const FinancialYear = require('../models/financialYear.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all financial years
exports.findAll = (req, res) => {

    FinancialYear.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving financial year."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a financial year by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    FinancialYear.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving financial year."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit financial year by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    FinancialYear.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing financial year."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert financial year
exports.insert = (req, res) => {
    const requestBody = req.body;

    FinancialYear.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing financial year."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}