const MainMenu = require('../models/mainMenu.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all main menus
exports.findAll = (req, res) => {

    MainMenu.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving main menu."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a main menu by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    MainMenu.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving main menu."
            });   
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit main menu by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    MainMenu.updateById(requestBody, (err, data) => {
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

// Insert main menu by id
exports.insert = (req, res) => {
    const requestBody = req.body;

    MainMenu.insert(requestBody, (err, data) => {
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