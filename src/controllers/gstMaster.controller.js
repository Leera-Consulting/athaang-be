const GSTMaster = require('../models/gstMaster.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all GSTMaster 
exports.findAll = (req, res) => {

    GSTMaster.getAll((err, data) => {
        console.log("ik", err, data);
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving GSTMaster."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a GSTMaster by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    GSTMaster.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving GSTMaster."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit GSTMaster by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    GSTMaster.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing GSTMaster."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert GSTMaster 
exports.insert = (req, res) => {
    const requestBody = req.body;

    GSTMaster.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting GSTMaster."
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

    GSTMaster.delete(requestBody, (err, data) => {
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