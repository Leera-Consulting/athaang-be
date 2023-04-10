const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_BUDGET_NAME, BUDGET_NAME } = require('../constants/tables');

// BudgetName constructor
const BudgetName = function(budgetName) {
    this.id = budgetName.id;
}

// Result all sma_budget_name from the database
BudgetName.getAll = result =>   {
    const query = getQuery(SMA_BUDGET_NAME);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_budget_name filtered from id from the database
BudgetName.findById = (id, result) => {
    const query = getByIdQuery(SMA_BUDGET_NAME, id);
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

        result(rowNotFoundResult(BUDGET_NAME));
    });
};

// Update a BudgetName filtered from id from the database
BudgetName.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_BUDGET_NAME, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a BudgetName into the database
BudgetName.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_BUDGET_NAME, requestBody);
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

module.exports = BudgetName;