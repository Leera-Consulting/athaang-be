const GoodsIssueNote = require('../models/goodsIssueNote.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all GoodsIssueNote 
exports.findAll = (req, res) => {

    GoodsIssueNote.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving GoodsIssueNote."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a GoodsIssueNote by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    GoodsIssueNote.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving GoodsIssueNote."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit GoodsIssueNote by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    GoodsIssueNote.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing GoodsIssueNote."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert GoodsIssueNote 
exports.insert = (req, res) => {
    const requestBody = req.body;

    GoodsIssueNote.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting GoodsIssueNote."
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

    GoodsIssueNote.delete(requestBody, (err, data) => {
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