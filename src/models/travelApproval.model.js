const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_TRAVAL_APPROVAL, TRAVEL_APPROVAL, SMA_TRAVEL_EXPENSES } = require("../constants/tables");

// Travel Approval constructor
const TravelApproval = function(travelApproval) {
    this.id = travelApproval.id;
}

// Result all travel approvals from the database
TravelApproval.getAll = result =>   {
    const query = getQuery(SMA_TRAVAL_APPROVAL);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a travel approval filtered from id from the database
TravelApproval.findById = (id, result) => {
    const query = getByIdQuery(SMA_TRAVAL_APPROVAL, id);
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
  
        result(rowNotFoundResult(TRAVEL_APPROVAL));
    });
};

TravelApproval.findAppovalRefNo = (user_id, result) => {
    const query = `SELECT * FROM ${SMA_TRAVAL_APPROVAL} WHERE draft_by = ${user_id} AND (status ='Booked' || status ='Completed' || status ='Approved') AND id NOT IN (SELECT approval_ref_no FROM ${SMA_TRAVEL_EXPENSES} WHERE exp_type = 'T' AND draft_by = ${user_id})`;
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
  
        result(rowNotFoundResult(TRAVEL_APPROVAL));
    });
}


// Update a travel approvals filtered from id from the database
TravelApproval.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_TRAVAL_APPROVAL, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a travel approvals into the database
TravelApproval.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_TRAVAL_APPROVAL, requestBody);
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

module.exports = TravelApproval;