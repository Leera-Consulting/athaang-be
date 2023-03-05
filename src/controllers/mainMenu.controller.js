const MainMenu = require('../models/mainMenu.model');

exports.findAll = (req, res) => {

    MainMenu.getAll((err, data) => {
        if (err)    {
            res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while retrieving main menu."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

exports.findById = (req, res) => {

    const { id } = req.params;
  
    MainMenu.findById(id, (err, data) => {
        if (err)
        res.status(500).send({
            success: false,
            message: err.message || "Some error occurred while retrieving main menu."
        });
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};