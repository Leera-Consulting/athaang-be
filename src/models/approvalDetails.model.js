const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_APPROVAL_DETAILS, APPROVAL_DETAILS } = require('../constants/tables');

// Approval Details constructor
const ApprovalDetails = function(approvalDetails) {
    this.id = approvalDetails.id;
}

// Result all SMA_APPROVAL_DETAILS from the database
ApprovalDetails.getAll = result =>   {
    const query = getQuery(SMA_APPROVAL_DETAILS);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_APPROVAL_DETAILS filtered from id from the database
ApprovalDetails.findById = (id, result) => {
    const query = `SELECT * FROM ${SMA_APPROVAL_DETAILS} WHERE approval_hdr_id = ${id}`;
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

        result(rowNotFoundResult(APPROVAL_DETAILS));
    });
};

// Update a SMA_APPROVAL_DETAILS filtered from id from the database
ApprovalDetails.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_APPROVAL_DETAILS, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMA_APPROVAL_DETAILS into the database
ApprovalDetails.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_APPROVAL_DETAILS, requestBody);
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

// Delete
ApprovalDetails.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_APPROVAL_DETAILS, requestBody);
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

module.exports = ApprovalDetails;