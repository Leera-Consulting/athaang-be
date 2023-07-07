const ProductOpenStock = require('../models/productOpenStock.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all product open stocks 
exports.findAll = (req, res) => {

    ProductOpenStock.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving product open stock."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a ProductOpenStock by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    ProductOpenStock.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving product open stock."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit ProductOpenStock by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    ProductOpenStock.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing product open stock."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert ProductOpenStock 
exports.insert = (req, res) => {
    const requestBody = req.body;

    ProductOpenStock.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting product open stock."
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

    ProductOpenStock.delete(requestBody, (err, data) => {
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