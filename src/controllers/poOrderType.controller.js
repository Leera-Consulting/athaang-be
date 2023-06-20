const POOrderType = require('../models/poOrderType.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all po order 
exports.findAll = (req, res) => {

    POOrderType.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving POOrderType."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a po order by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    POOrderType.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving POOrderType."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit po order by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    POOrderType.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing POOrderType."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert po order 
exports.insert = (req, res) => {
    const requestBody = req.body;

    POOrderType.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting POOrderType."
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

    POOrderType.delete(requestBody, (err, data) => {
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