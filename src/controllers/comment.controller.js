const Comment = require('../models/comment.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all comments
exports.findAll = (req, res) => {

    Comment.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving Comment."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a Comment by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Comment.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving Comment."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Responses for all Comment for travel expense
exports.findCommentsForTravelExpense = (req, res) => {

    const { te_id } = req.params;
  
    Comment.findCommentsForTravelExpense(te_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving Comment."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit Comment by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    Comment.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing Comment."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert Comment
exports.insert = (req, res) => {
    const requestBody = req.body;

    Comment.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing Comment."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Delete 
exports.delete = (req, res) => {
    const requestBody = req.body;

    Comment.delete(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while deleting."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}