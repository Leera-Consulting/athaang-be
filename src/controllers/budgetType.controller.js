const BudgetType = require('../models/budgetType.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all budget type 
exports.findAll = (req, res) => {

    BudgetType.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving budget type."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a budget type by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    BudgetType.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving budget type."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit budget type by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    BudgetType.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing budget type."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert budget type 
exports.insert = (req, res) => {
    const requestBody = req.body;

    BudgetType.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting budget type."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}