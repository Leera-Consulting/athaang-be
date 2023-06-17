const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { FILE_UPLOADS } = require("../constants/tables");

// FileUploads constructor
const FileUploads = function(fileUploads) {
    this.id = fileUploads.id;
}

// Result all FileUploads from the database
FileUploads.getAll = result =>   {
    const query = getQuery(FILE_UPLOADS);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a FileUploads filtered from id from the database
FileUploads.findById = (id, result) => {
    const query = getByIdQuery(FILE_UPLOADS, id);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        if (res.length) {
            result(null, res[0]);
            return;
        }
  
        result(rowNotFoundResult(FILE_UPLOADS));
    });
};

// Update a FileUploads filtered from id from the database
FileUploads.updateById = (requestBody, result) => {
    const query = putByIdQuery(FILE_UPLOADS, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a FileUploads into the database
FileUploads.insert = (requestBody, result) => {
    const query = postByIdQuery(FILE_UPLOADS, requestBody);
    console.log(query)
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Result all travel approval file uploads from the database
FileUploads.getTravelApprovalFileUploads = (ta_id, result) =>   {
    const query = `SELECT * FROM ${FILE_UPLOADS} WHERE module = 'TA' AND reference_id = ${ta_id};`
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result all reimbursement file uploads from the database
FileUploads.getReimbursementFileUploads = (re_id, result) =>   {
    const query = `SELECT * FROM ${FILE_UPLOADS} WHERE module = 'RE' AND reference_id = ${re_id};`
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result all supplier invoice file uploads from the database
FileUploads.getSupplierInvoiceFileUploads = (si_id, result) =>   {
    const query = `SELECT * FROM ${FILE_UPLOADS} WHERE module = 'SI' AND reference_id = ${si_id};`
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result all travel expenses file uploads from the database
FileUploads.getTravelExpensesFileUploads = (te_id, result) =>   {
    const query = `SELECT * FROM ${FILE_UPLOADS} WHERE module = 'TE' AND reference_id = ${te_id};`
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Delete
FileUploads.delete = (requestBody, result) => {
    const query = deleteByIdQuery(FILE_UPLOADS, requestBody);
    console.log(query)
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

module.exports = FileUploads;