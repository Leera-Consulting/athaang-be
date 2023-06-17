const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_ACCOUNT_GROUP, ACCOUNT_GROUP } = require('../constants/tables');

// AccountGroup constructor
const AccountGroup = function(accountGroup) {
    this.id = accountGroup.id;
}

// Result all SMA_ACCOUNT_GROUP from the database
AccountGroup.getAll = result =>   {
    const query = getQuery(SMA_ACCOUNT_GROUP);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_ACCOUNT_GROUP filtered from id from the database
AccountGroup.findById = (id, result) => {
    const query = getByIdQuery(SMA_ACCOUNT_GROUP, id);
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

        result(rowNotFoundResult(ACCOUNT_GROUP));
    });
};

// Update a AccountGroup filtered from id from the database
AccountGroup.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_ACCOUNT_GROUP, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a AccountGroup into the database
AccountGroup.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_ACCOUNT_GROUP, requestBody);
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
AccountGroup.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_ACCOUNT_GROUP, requestBody);
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

module.exports = AccountGroup;