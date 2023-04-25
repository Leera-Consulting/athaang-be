const PurchaseOrder = require('../models/purchaseOrder.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all purchase orders 
exports.findAll = (req, res) => {

    PurchaseOrder.getAll((err, data) => {
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

// Responses for fetching a PurchaseOrder by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    PurchaseOrder.findById(id, (err, data) => {
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

// Edit PurchaseOrder by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    PurchaseOrder.updateById(requestBody, (err, data) => {
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

// Insert PurchaseOrder 
exports.insert = (req, res) => {
    const requestBody = req.body;

    PurchaseOrder.insert(requestBody, (err, data) => {
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