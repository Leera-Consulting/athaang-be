const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_DEPARTURE, DEPARTURE } = require("../constants/tables");

// Departure constructor
const Departure = function(departure) {
    this.id = departure.id;
}

// Result all sma_departure from the database
Departure.getAll = result =>   {
    const query = getQuery(SMA_DEPARTURE);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_departure filtered from id from the database
Departure.findById = (id, result) => {
    const query = getByIdQuery(SMA_DEPARTURE, id);
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
  
        result(rowNotFoundResult(DEPARTURE));
    });
};

// Result a sma_departure filtered from approval_ref_no from the database
Departure.findByApprovalRefNo = (te_id, result) => {
    const query = `SELECT * from ${SMA_DEPARTURE} where approval_ref_no = ${te_id}`;
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
};

// Update a departure filtered from id from the database
Departure.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_DEPARTURE, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a departure into the database
Departure.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_DEPARTURE, requestBody);
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
Departure.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_DEPARTURE, requestBody);
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

module.exports = Departure;