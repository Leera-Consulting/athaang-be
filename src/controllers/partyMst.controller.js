const PartyMst = require('../models/partyMst.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all PartyMst 
exports.findAll = (req, res) => {

    PartyMst.getAll((err, data) => {
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

// Responses for fetching a PartyMst by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    PartyMst.findById(id, (err, data) => {
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

// Edit PartyMst by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    PartyMst.updateById(requestBody, (err, data) => {
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

// Insert PartyMst 
exports.insert = (req, res) => {
    const requestBody = req.body;

    PartyMst.insert(requestBody, (err, data) => {
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