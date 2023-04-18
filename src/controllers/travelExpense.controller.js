const TravelExpense = require('../models/travelExpense.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all travel expenses
exports.findAll = (req, res) => {

    TravelExpense.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving term."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a travel expenses by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    TravelExpense.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving term."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit travel expense by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    TravelExpense.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing term."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert travel expense
exports.insert = (req, res) => {
    const requestBody = req.body;

    TravelExpense.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing term."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}