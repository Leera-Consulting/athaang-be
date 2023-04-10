const BudgetName = require('../models/budgetName.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all budget names 
exports.findAll = (req, res) => {

    BudgetName.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving budget names."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a budget name by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    BudgetName.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving budget names."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit budget name by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    BudgetName.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing budget names."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert budget name 
exports.insert = (req, res) => {
    const requestBody = req.body;

    BudgetName.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting budget names."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}