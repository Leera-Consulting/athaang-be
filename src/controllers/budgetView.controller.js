const BudgetView = require('../models/budgetView.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all budget view 
exports.findAll = (req, res) => {

    BudgetView.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving budget view."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a budget view by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    BudgetView.findById(id, (err, data) => {
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

// Responses for fetching budget transactions 
exports.findBudgetTransaction = (req, res) => {

    const requestBody = req.body; 

    BudgetView.getBudgetTransaction(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving budget view."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Edit budget view by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    BudgetView.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing budget view."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert budget view 
exports.insert = (req, res) => {
    const requestBody = req.body;

    BudgetView.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting budget view."
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

    BudgetView.delete(requestBody, (err, data) => {
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