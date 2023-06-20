const Workflow = require('../models/workflow.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all workflow 
exports.findAll = (req, res) => {

    Workflow.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving workflows."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a workflow by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Workflow.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving workflow."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// filter
exports.filter = (req, res) => {

    const params = req.query;
  
    Workflow.filter(params, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving workflow."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};


// Edit workflows by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    Workflow.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing workflows."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert workflows 
exports.insert = (req, res) => {
    const requestBody = req.body;

    Workflow.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting workflow."
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

    Workflow.delete(requestBody, (err, data) => {
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