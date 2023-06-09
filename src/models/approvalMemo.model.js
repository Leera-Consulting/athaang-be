const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_APPROVAL_MEMO, APPROVAL_MEMO } = require('../constants/tables');

// Approval Memo constructor
const ApprovalMemo = function(approvalMemo) {
    this.id = approvalMemo.id;
}

// Result all SMA_APPROVAL_MEMO from the database
ApprovalMemo.getAll = result =>   {
    const query = getQuery(SMA_APPROVAL_MEMO);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_APPROVAL_MEMO filtered from id from the database
ApprovalMemo.findById = (id, result) => {
    const query = getByIdQuery(SMA_APPROVAL_MEMO, id);
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

        result(rowNotFoundResult(APPROVAL_MEMO));
    });
};

// Update a SMA_APPROVAL_MEMO filtered from id from the database
ApprovalMemo.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_APPROVAL_MEMO, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMA_APPROVAL_MEMO into the database
ApprovalMemo.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_APPROVAL_MEMO, requestBody);
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
ApprovalMemo.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_APPROVAL_MEMO, requestBody);
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

module.exports = ApprovalMemo;