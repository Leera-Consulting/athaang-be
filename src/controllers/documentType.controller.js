const DocumentType = require('../models/documentType.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all document types
exports.findAll = (req, res) => {

    DocumentType.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving document type."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a document type by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    DocumentType.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving document type."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};