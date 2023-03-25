const SmptDetail = require('../models/smtpDetail.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all smtp detail
exports.findAll = (req, res) => {

    SmptDetail.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving smtp detail."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a smtp detail by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    SmptDetail.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving smtp detail."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit smtp detail by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    SmptDetail.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing smtp detail."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert smtp detail
exports.insert = (req, res) => {
    const requestBody = req.body;

    SmptDetail.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing smtp detail."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}