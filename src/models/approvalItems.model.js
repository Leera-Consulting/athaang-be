const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_APPROVAL_ITEMS, APPROVAL_ITEMS } = require('../constants/tables');

// Approval Items constructor
const ApprovalItems = function(approvalItems) {
    this.id = approvalItems.id;
}

// Result all SMA_APPROVAL_ITEMS from the database
ApprovalItems.getAll = result =>   {
    const query = getQuery(SMA_APPROVAL_ITEMS);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_APPROVAL_ITEMS filtered from id from the database
ApprovalItems.findById = (id, result) => {
    const query = getByIdQuery(SMA_APPROVAL_ITEMS, id);
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

        result(rowNotFoundResult(APPROVAL_ITEMS));
    });
};

// Update a SMA_APPROVAL_ITEMS filtered from id from the database
ApprovalItems.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_APPROVAL_ITEMS, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMA_APPROVAL_ITEMS into the database
ApprovalItems.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_APPROVAL_ITEMS, requestBody);
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
ApprovalItems.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_APPROVAL_ITEMS, requestBody);
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

module.exports = ApprovalItems;