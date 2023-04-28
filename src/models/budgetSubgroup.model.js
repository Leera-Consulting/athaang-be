const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_BUDGET_SUBGROUP, BUDGET_SUBGROUP } = require('../constants/tables');

// BudgetSubgroup constructor
const BudgetSubgroup = function(budgetSubgroup) {
    this.id = budgetSubgroup.id;
}

// Result all SMA_BUDGET_SUBGROUP from the database
BudgetSubgroup.getAll = result =>   {
    const query = getQuery(SMA_BUDGET_SUBGROUP);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_BUDGET_SUBGROUP filtered from id from the database
BudgetSubgroup.findById = (id, result) => {
    const query = getByIdQuery(SMA_BUDGET_SUBGROUP, id);
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

        result(rowNotFoundResult(BUDGET_SUBGROUP));
    });
};

// Update a SMA_BUDGET_SUBGROUP filtered from id from the database
BudgetSubgroup.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_BUDGET_SUBGROUP, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMA_BUDGET_SUBGROUP into the database
BudgetSubgroup.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_BUDGET_SUBGROUP, requestBody);
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

module.exports = BudgetSubgroup;