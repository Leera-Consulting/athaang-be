const Cities = require('../models/cities.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all cities
exports.findAll = (req, res) => {

    Cities.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving cities."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a cities by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Cities.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving cities."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit cities by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    Cities.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing cities."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert cities
exports.insert = (req, res) => {
    const requestBody = req.body;

    Cities.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing cities."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}