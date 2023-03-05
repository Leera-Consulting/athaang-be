const Role = require('../models/role.model');

exports.findAll = (req, res) => {

    Role.getAll((err, data) => {
        if (err)    {
            res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while retrieving roles."
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
  
    Role.findById(id, (err, data) => {
        if (err)
        res.status(500).send({
            success: false,
            message: err.message || "Some error occurred while retrieving role."
        });
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};