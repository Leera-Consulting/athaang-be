const Budget = require('../models/budget.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all budget 
exports.findAll = (req, res) => {

    Budget.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving Budget."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a Budget by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Budget.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving Budget."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit Budget by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    Budget.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing Budget."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert Budget 
exports.insert = (req, res) => {
    const requestBody = req.body;

    Budget.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting Budget."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}