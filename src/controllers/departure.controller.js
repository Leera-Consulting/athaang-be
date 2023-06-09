const Departure = require('../models/departure.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all departure
exports.findAll = (req, res) => {

    Departure.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving departures."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a departure by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Departure.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving department."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Responses for fetching a departure by approval_ref_no
exports.findByApprovalRefNo = (req, res) => {

    const { te_id } = req.params;
  
    Departure.findByApprovalRefNo(te_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving department."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit departure by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    Departure.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing departure."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert departure
exports.insert = (req, res) => {
    const requestBody = req.body;

    Departure.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing departure."
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

    Departure.delete(requestBody, (err, data) => {
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