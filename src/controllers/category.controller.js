const Category = require('../models/category.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all category 
exports.findAll = (req, res) => {

    Category.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving category."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a category by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Category.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving category."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit category by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    Category.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing category."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert category 
exports.insert = (req, res) => {
    const requestBody = req.body;

    Category.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting category."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}