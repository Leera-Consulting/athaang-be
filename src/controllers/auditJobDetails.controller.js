const AuditJobDetails = require('../models/auditJobDetails.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all audit job header 
exports.findAll = (req, res) => {

    AuditJobDetails.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving AuditJobDetails."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a AuditJobDetails by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    AuditJobDetails.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving AuditJobDetails."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Responses for fetching a AuditJobDetails by audit_job_hdr_id
exports.findByHeaderId = (req, res) => {

    const { audit_job_hdr_id } = req.params;
  
    AuditJobDetails.findByHeaderId(audit_job_hdr_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving AuditJobDetails."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit AuditJobDetails by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    AuditJobDetails.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing AuditJobDetails."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert AuditJobDetails 
exports.insert = (req, res) => {
    const requestBody = req.body;

    AuditJobDetails.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting AuditJobDetails."
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

    AuditJobDetails.delete(requestBody, (err, data) => {
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