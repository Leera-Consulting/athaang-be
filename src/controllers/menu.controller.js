const Menu = require('../models/menu.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all menus
exports.findAll = (req, res) => {

    Menu.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving menu."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a menu by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Menu.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving menu."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};