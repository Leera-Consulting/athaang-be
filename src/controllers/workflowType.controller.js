const WorkflowType = require('../models/workflowType.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all workflow type
exports.findAll = (req, res) => {

    WorkflowType.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving workflow type."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a workflow type by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    WorkflowType.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving workflow type."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit workflow type by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    WorkflowType.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing workflow type."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert workflow type
exports.insert = (req, res) => {
    const requestBody = req.body;

    WorkflowType.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing workflow type."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}