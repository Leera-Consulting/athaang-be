const TenderTerms = require('../models/tenderTerms.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all tender term
exports.findAll = (req, res) => {

    TenderTerms.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving tender term."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a tender term by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    TenderTerms.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving tender term."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit tender terms by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    TenderTerms.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing tender term."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert tender term
exports.insert = (req, res) => {
    const requestBody = req.body;

    TenderTerms.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting tender term."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}