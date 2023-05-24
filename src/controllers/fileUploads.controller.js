const FileUploads = require('../models/fileUploads.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all file uploads
exports.findAll = (req, res) => {

    FileUploads.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving FileUploads."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a file uploads by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    FileUploads.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving FileUploads."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit file uploads by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    FileUploads.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing FileUploads."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert file uploads
exports.insert = (req, res) => {
    const requestBody = req.body;

    FileUploads.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing FileUploads."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Responses for fetching all travel approval file uploads
exports.findTravelApprovalFileUploads = (req, res) => {
    const { ta_id } = req.params;

    FileUploads.getTravelApprovalFileUploads(ta_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving FileUploads."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching all reimbursement file uploads
exports.findReimbursementFileUploads = (req, res) => {
    const { re_id } = req.params;

    FileUploads.getReimbursementFileUploads(re_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving FileUploads."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching all travel expenses file uploads
exports.findTravelExpensesFileUploads = (req, res) => {
    const { te_id } = req.params;

    FileUploads.getTravelExpensesFileUploads(te_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving FileUploads."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};