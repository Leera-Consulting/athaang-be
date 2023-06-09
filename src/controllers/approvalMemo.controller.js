const ApprovalMemo = require('../models/approvalMemo.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all approval memos 
exports.findAll = (req, res) => {

    ApprovalMemo.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving AccountGroup."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a ApprovalMemo by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    ApprovalMemo.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving AccountGroup."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit ApprovalMemo by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    ApprovalMemo.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing AccountGroup."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert ApprovalMemo 
exports.insert = (req, res) => {
    const requestBody = req.body;

    ApprovalMemo.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting AccountGroup."
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

    ApprovalMemo.delete(requestBody, (err, data) => {
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