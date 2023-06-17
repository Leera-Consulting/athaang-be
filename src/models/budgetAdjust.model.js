const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { BUDGET_ADJUST } = require('../constants/tables');

// BudgetAdjust constructor
const BudgetAdjust = function(budgetAdjust) {
    this.id = budgetAdjust.id;
}

// Result all BUDGET_ADJUST from the database
BudgetAdjust.getAll = result =>   {
    const query = getQuery(BUDGET_ADJUST);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a BUDGET_ADJUST filtered from id from the database
BudgetAdjust.findById = (id, result) => {
    const query = getByIdQuery(BUDGET_ADJUST, id);
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

        result(rowNotFoundResult(BUDGET_ADJUST));
    });
};

// Update a BudgetAdjust filtered from id from the database
BudgetAdjust.updateById = (requestBody, result) => {
    const query = putByIdQuery(BUDGET_ADJUST, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a BudgetAdjust into the database
BudgetAdjust.insert = (requestBody, result) => {
    const query = postByIdQuery(BUDGET_ADJUST, requestBody);
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
BudgetAdjust.delete = (requestBody, result) => {
    const query = deleteByIdQuery(BUDGET_ADJUST, requestBody);
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

module.exports = BudgetAdjust;