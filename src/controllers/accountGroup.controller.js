const AccountGroup = require('../models/accountGroup.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all account groups 
exports.findAll = (req, res) => {

    AccountGroup.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving AccountGroup."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a AccountGroup by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    AccountGroup.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving AccountGroup."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit AccountGroup by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    AccountGroup.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing AccountGroup."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert AccountGroup 
exports.insert = (req, res) => {
    const requestBody = req.body;

    AccountGroup.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting AccountGroup."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}