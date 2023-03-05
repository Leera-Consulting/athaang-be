const Menu = require('../models/menu.model');

exports.findAll = (req, res) => {

    Menu.getAll((err, data) => {
        if (err)    {
            res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while retrieving menu."
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
  
    Menu.findById(id, (err, data) => {
        if (err)
        res.status(500).send({
            success: false,
            message: err.message || "Some error occurred while retrieving menu."
        });
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};