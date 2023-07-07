const AuditJobHeader = require('../models/auditJobHeader.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all audit job header 
exports.findAll = (req, res) => {

    AuditJobHeader.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving AuditJobHeader."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a AuditJobHeader by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    AuditJobHeader.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving AuditJobHeader."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit AuditJobHeader by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    AuditJobHeader.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing AuditJobHeader."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert AuditJobHeader 
exports.insert = (req, res) => {
    const requestBody = req.body;

    AuditJobHeader.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting AuditJobHeader."
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

    AuditJobHeader.delete(requestBody, (err, data) => {
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