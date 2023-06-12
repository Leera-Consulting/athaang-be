const TallyJournalEntry = require('../models/tallyJournalEntry.model');
const { handleSqlErrorMessage } = require("../utils/error");

// Responses for fetching all TallyJournalEntry 
exports.findAll = (req, res) => {

    TallyJournalEntry.getAll((err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving TallyJournalEntry."
            });
        } else {
            res.status(200).send({
                success: true,
                data: data
            });
        }
    })
};

// Responses for fetching a TallyJournalEntry by id
exports.findById = (req, res) => {

    const { id } = req.params;
  
    TallyJournalEntry.findById(id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving TallyJournalEntry."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Responses for fetching TallyJournalEntry for travel expense
exports.findForTravelExpense = (req, res) => {

    const { te_id } = req.params;
  
    TallyJournalEntry.findForTravelExpense(te_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving TallyJournalEntry."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Responses for fetching TallyJournalEntry for supplier invoice
exports.findForSupplierInvoice = (req, res) => {

    const { si_id } = req.params;
  
    TallyJournalEntry.findForSupplierInvoice(si_id, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while retrieving TallyJournalEntry."
            });
        }
        else res.status(200).send({
            success: true,
            data: data
        })
    })
};

// Edit TallyJournalEntry by id
exports.updateById = (req, res) => {
    const requestBody = req.body;

    TallyJournalEntry.updateById(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while editing TallyJournalEntry."
            })
        } else {
            res.status(200).send({
                success: true,
                data: data
            })
        }
    })
}

// Insert TallyJournalEntry 
exports.insert = (req, res) => {
    const requestBody = req.body;

    TallyJournalEntry.insert(requestBody, (err, data) => {
        if (err)    {
            const sqlErrorMessage = handleSqlErrorMessage(err);

            res.status(500).send({
                success: false,
                message: sqlErrorMessage || "Some error occurred while inserting TallyJournalEntry."
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

    TallyJournalEntry.delete(requestBody, (err, data) => {
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