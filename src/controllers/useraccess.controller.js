const Useraccess = require('../models/useraccess.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all useraccess
exports.findAll = (req, res) => {

    Useraccess.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving workflow history."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a Useraccess by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    Useraccess.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving workflow history."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit Useraccess by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    Useraccess.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing workflow history."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Bulk Edit Useraccess by id
exports.bulkUpdateById = (req, res) => {
    const requestBody = req.body;

    Useraccess.bulkUpdateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing workflow history."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert Useraccess
exports.insert = (req, res) => {
    const requestBody = req.body;

    Useraccess.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing workflow history."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}


// Find Useraccess of a user role
exports.findUseraccessOfUserRole = (req, res) => {
    const { user_role } = req.params;

    Useraccess.getUseraccessOfUserRole(user_role, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while fetching useraccess."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}