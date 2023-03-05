const Designation = require('../models/designation.model');

exports.findAll = (req, res) => {

    Designation.getAll((err, data) => {
        if (err)    {
            res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while retrieving designation."
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
  
    Designation.findById(id, (err, data) => {
        if (err)
        res.status(500).send({
            success: false,
            message: err.message || "Some error occurred while retrieving designation."
        });
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};