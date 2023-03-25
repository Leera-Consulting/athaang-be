const Department = require('../models/department.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all departments
exports.findAll = (req, res) => {

    Department.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving departments."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a department by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Department.findById(id, (err, data) => {
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

// Edit department by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    Department.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing department."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert main menu by id
exports.insert = (req, res) => {
    const requestBody = req.body;

    Department.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing main menu."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}