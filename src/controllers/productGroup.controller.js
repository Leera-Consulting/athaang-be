const ProductGroup = require('../models/productGroup.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all product groups
exports.findAll = (req, res) => {

    ProductGroup.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving product groups."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a product group by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    ProductGroup.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving product group."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit product group by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    ProductGroup.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing product group."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert product group
exports.insert = (req, res) => {
    const requestBody = req.body;

    ProductGroup.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting product group."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}