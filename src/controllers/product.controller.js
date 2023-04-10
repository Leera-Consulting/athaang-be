const Product = require('../models/product.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all product 
exports.findAll = (req, res) => {

    Product.getAll((err, data) => {
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

// Responses for fetching a product by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Product.findById(id, (err, data) => {
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

// Edit product by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    Product.updateById(requestBody, (err, data) => {
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

// Insert product 
exports.insert = (req, res) => {
    const requestBody = req.body;

    Product.insert(requestBody, (err, data) => {
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