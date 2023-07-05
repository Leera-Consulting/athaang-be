const GoodsIssueNoteItems = require('../models/goodsIssueNoteItems.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all GoodsIssueNoteItems 
exports.findAll = (req, res) => {

    GoodsIssueNoteItems.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving GoodsIssueNoteItems."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a GoodsIssueNoteItems by id
exports.findByGinId = (req, res) => {

    const { id } = req.params;
  
    GoodsIssueNoteItems.findByGinId(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving GoodsIssueNoteItems."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit GoodsIssueNoteItems by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    GoodsIssueNoteItems.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing GoodsIssueNoteItems."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert GoodsIssueNoteItems 
exports.insert = (req, res) => {
    const requestBody = req.body;

    GoodsIssueNoteItems.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting GoodsIssueNoteItems."
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

    GoodsIssueNoteItems.delete(requestBody, (err, data) => {
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