const PurchaseReq = require('../models/purchaseReq.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all purchase reqs
exports.findAll = (req, res) => {

    PurchaseReq.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving purchase reqs."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a purchase req by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    PurchaseReq.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving purchase reqs."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit purchase reqs by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    PurchaseReq.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing purchase reqs."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert purchase req by id
exports.insert = (req, res) => {
    const requestBody = req.body;

    PurchaseReq.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing purchase reqs."
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

    PurchaseReq.delete(requestBody, (err, data) => {
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