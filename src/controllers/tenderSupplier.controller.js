const TenderSupplier = require('../models/tenderSupplier.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all tender supplier 
exports.findAll = (req, res) => {

    TenderSupplier.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving tender supplier."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching all tender supplier of a tender header
exports.findSuppliersOfTenderHeader = (req, res) => {

    const { tender_id } = req.params;

    TenderSupplier.getSuppliersOfTenderHeader(tender_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving tender suppliers."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a tender supplier by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    TenderSupplier.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving Tender supplier."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit tender supplier by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    TenderSupplier.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing tender supplier."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert tender supplier 
exports.insert = (req, res) => {
    const requestBody = req.body;

    TenderSupplier.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting tender supplier."
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

    TenderSupplier.delete(requestBody, (err, data) => {
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