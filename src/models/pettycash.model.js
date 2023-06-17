const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_PETTYCASH, PETTYCASH } = require("../constants/tables")

// Petty cash constructor
const PettyCash = function(pettyCash) {
    this.id = pettyCash.id;
}

// Result all Petty cash from the database
PettyCash.getAll = result =>   {
    const query = getQuery(SMA_PETTYCASH);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a Petty cash filtered from id from the database
PettyCash.findById = (id, result) => {
    const query = getByIdQuery(SMA_PETTYCASH, id);
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

        result(rowNotFoundResult(PETTYCASH));
    });
};

// Update a Petty cash filtered from id from the database
PettyCash.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_PETTYCASH, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a Petty cash into the database
PettyCash.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_PETTYCASH, requestBody);
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
PettyCash.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_PETTYCASH, requestBody);
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

module.exports = PettyCash;