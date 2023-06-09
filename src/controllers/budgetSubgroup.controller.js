const BudgetSubgroup = require('../models/budgetSubgroup.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all budget subgroups 
exports.findAll = (req, res) => {

    BudgetSubgroup.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving budget subgroups."
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
  
    BudgetSubgroup.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving budget subgroups."
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

    BudgetSubgroup.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing budget subgroups."
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

    BudgetSubgroup.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting budget subgroups."
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

    BudgetSubgroup.delete(requestBody, (err, data) => {
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