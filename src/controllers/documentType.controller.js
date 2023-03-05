const DocumentType = require('../models/documentType.model');

exports.findAll = (req, res) => {

    DocumentType.getAll((err, data) => {
        if (err)    {
            res.status(500).send({
                success: false,
                message: err.message || "Some error occurred while retrieving document type."
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
  
    DocumentType.findById(id, (err, data) => {
        if (err)
        res.status(500).send({
            success: false,
            message: err.message || "Some error occurred while retrieving document type."
        });
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};