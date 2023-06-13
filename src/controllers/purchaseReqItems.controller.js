const PurchaseReqItems = require('../models/purchaseReqItems.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all purchase reqs items
exports.findAll = (req, res) => {

    PurchaseReqItems.getAll((err, data) => {
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

// Responses for fetching a purchase req item by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    PurchaseReqItems.findById(id, (err, data) => {
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

// Responses for fetching a purchase req item by purchase req
exports.findByPurchaseReq = (req, res) => {

    const { id } = req.params;
  
    PurchaseReqItems.findByPurchaseReq(id, (err, data) => {
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

// Edit purchase req item by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    PurchaseReqItems.updateById(requestBody, (err, data) => {
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

// Insert purchase req item by id
exports.insert = (req, res) => {
    const requestBody = req.body;

    PurchaseReqItems.insert(requestBody, (err, data) => {
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

    PurchaseReqItems.delete(requestBody, (err, data) => {
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