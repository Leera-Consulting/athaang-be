const SupplierInvoice = require('../models/supplierInvoice.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all supplier invoice 
exports.findAll = (req, res) => {

    SupplierInvoice.getAll((err, data) => {
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

// Responses for fetching a supplier invoice by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    SupplierInvoice.findById(id, (err, data) => {
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

// Edit supplier invoice by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    SupplierInvoice.updateById(requestBody, (err, data) => {
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

// Insert supplier invoice 
exports.insert = (req, res) => {
    const requestBody = req.body;

    SupplierInvoice.insert(requestBody, (err, data) => {
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