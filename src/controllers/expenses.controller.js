const Expenses = require('../models/expenses.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all expenses
exports.findAll = (req, res) => {

    Expenses.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving expenses."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a expense by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Expenses.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving expense."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Responses for all Expenses from the database with approval_ref_no & travel
exports.findTravelExpenseByApprovalRefNo = (req, res) => {

    const { te_id } = req.params;
  
    Expenses.findTravelExpenseByApprovalRefNo(te_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving expense."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit expense by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    Expenses.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing expense."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert expense 
exports.insert = (req, res) => {
    const requestBody = req.body;

    Expenses.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing expense."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}