const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_BUDGET_TYPE, BUDGET_TYPE } = require('../constants/tables');

// BudgetType constructor
const BudgetType = function(budgetName) {
    this.id = budgetName.id;
}

// Result all SMA_BUDGET_TYPE from the database
BudgetType.getAll = result =>   {
    const query = getQuery(SMA_BUDGET_TYPE);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_BUDGET_TYPE filtered from id from the database
BudgetType.findById = (id, result) => {
    const query = getByIdQuery(SMA_BUDGET_TYPE, id);
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

        result(rowNotFoundResult(BUDGET_TYPE));
    });
};

// Update a BudgetType filtered from id from the database
BudgetType.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_BUDGET_TYPE, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a BudgetType into the database
BudgetType.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_BUDGET_TYPE, requestBody);
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
BudgetType.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_BUDGET_TYPE, requestBody);
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

module.exports = BudgetType;