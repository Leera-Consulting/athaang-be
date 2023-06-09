const TenderFileUpload = require('../models/tenderFileUpload.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all tender file upload
exports.findAll = (req, res) => {

    TenderFileUpload.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving tender file upload."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching all tender file upload of a tender header
exports.findFileUploadOfTenderHeader = (req, res) => {

    const { tender_id } = req.params;

    TenderFileUpload.getFileUploadOfTenderHeader(tender_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving tender file upload."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a tender file upload by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    TenderFileUpload.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving tender file upload."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit tender FileUpload by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    TenderFileUpload.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing tender file upload."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert tender file upload
exports.insert = (req, res) => {
    const requestBody = req.body;

    TenderFileUpload.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting tender file upload."
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

    TenderFileUpload.delete(requestBody, (err, data) => {
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