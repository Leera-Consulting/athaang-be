const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { ACCOUNT_MST } = require('../constants/tables');

// AccountMst constructor
const AccountMst = function(accountMst) {
    this.id = accountMst.id;
}

// Result all ACCOUNT_MST from the database
AccountMst.getAll = result =>   {
    const query = getQuery(ACCOUNT_MST);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};


// Result all ACCOUNT_MST from the database where account type is B
AccountMst.getAllBanks = result =>   {
    const query = `SELECT * FROM ${ACCOUNT_MST} WHERE account_type = 'B'`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a ACCOUNT_MST filtered from id from the database
AccountMst.findById = (id, result) => {
    const query = getByIdQuery(ACCOUNT_MST, id);
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

        result(rowNotFoundResult(ACCOUNT_MST));
    });
};

// Update a ACCOUNT_MST filtered from id from the database
AccountMst.updateById = (requestBody, result) => {
    const query = putByIdQuery(ACCOUNT_MST, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a ACCOUNT_MST into the database
AccountMst.insert = (requestBody, result) => {
    const query = postByIdQuery(ACCOUNT_MST, requestBody);
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
AccountMst.delete = (requestBody, result) => {
    const query = deleteByIdQuery(ACCOUNT_MST, requestBody);
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

module.exports = AccountMst;