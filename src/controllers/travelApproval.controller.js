const TravelApproval = require('../models/travelApproval.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all travel approval
exports.findAll = (req, res) => {

    TravelApproval.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving term."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a travel approval by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    TravelApproval.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving term."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit travel approval by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    TravelApproval.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing term."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert travel approval
exports.insert = (req, res) => {
    const requestBody = req.body;

    TravelApproval.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing term."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}