const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_EXPENSES } = require("../constants/tables");

// Expenses constructor
const Expenses = function(expenses) {
    this.id = expenses.id;
}

// Result all Expenses from the database
Expenses.getAll = result =>   {
    const query = getQuery(SMA_EXPENSES);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a expense filtered from id from the database
Expenses.findById = (id, result) => {
    const query = getByIdQuery(SMA_EXPENSES, id);
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
  
        result(rowNotFoundResult(SMA_EXPENSES));
    });
};

// Result all Expenses from the database with approval_ref_no & travel
Expenses.findTravelExpenseByApprovalRefNo = (te_id, result) =>   {
    const query = `SELECT * from ${SMA_EXPENSES} where approval_ref_no = ${te_id} and exp_type= 'T'`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Update a expenses filtered from id from the database
Expenses.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_EXPENSES, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a Expense into the database
Expenses.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_EXPENSES, requestBody);
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
Expenses.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_EXPENSES, requestBody);
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

module.exports = Expenses;