const PettyCash = require('../models/pettycash.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all pettycash 
exports.findAll = (req, res) => {

    PettyCash.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving product."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a pettycash by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    PettyCash.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving product."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit pettycash by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    PettyCash.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing product."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert pettycash 
exports.insert = (req, res) => {
    const requestBody = req.body;

    PettyCash.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting product."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}