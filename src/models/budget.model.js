const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_BUDGET, BUDGET } = require('../constants/tables');

// Budget constructor
const Budget = function(budget) {
    this.id = budget.id;
}

// Result all SMA_BUDGET from the database
Budget.getAll = result =>   {
    const query = getQuery(SMA_BUDGET);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_BUDGET filtered from id from the database
Budget.findById = (id, result) => {
    const query = getByIdQuery(SMA_BUDGET, id);
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

        result(rowNotFoundResult(BUDGET));
    });
};

// Update a SMA_BUDGET filtered from id from the database
Budget.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_BUDGET, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMA_BUDGET into the database
Budget.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_BUDGET, requestBody);
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
Budget.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_BUDGET, requestBody);
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

module.exports = Budget;