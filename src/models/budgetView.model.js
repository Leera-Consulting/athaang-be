const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { BUDGET_VIEW, SMA_BUDGET } = require('../constants/tables');

// BudetView constructor
const BudgetView = function(budgetView) {
    this.id = budgetView.id;
}

// Result all BUDGET_VIEW from the database
BudgetView.getAll = result =>   {
    const query = getQuery(BUDGET_VIEW);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a BUDGET_VIEW filtered from id from the database
BudgetView.findById = (id, result) => {
    const query = getByIdQuery(BUDGET_VIEW, id);
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

        result(rowNotFoundResult(BUDGET_VIEW));
    });
};

// Result budget transaction from the database
BudgetView.getBudgetTransaction = (requestBody, result) =>   {
    const query = `SELECT a.doc_type, a.doc_no, a.items, a.budget_id, a.check_var, a.po_srno , a.doc_date, a.party_name, a.invoice_no, a.approval_no, a.po_number, a.comp_code, a.blocked_budget, a.used_budget, a.adjustment_budget, b.total_budget, a.location, a.department, a.status, a.party_id, a.doctype FROM ${BUDGET_VIEW} a, ${SMA_BUDGET} b WHERE 1 AND b.id = a.budget_id AND (a.comp_code = "${requestBody.comp_code}" AND b.location = "${requestBody.location}")`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Update a BUDGET_VIEW filtered from id from the database
BudgetView.updateById = (requestBody, result) => {
    const query = putByIdQuery(BUDGET_VIEW, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a BUDGET_VIEW into the database
BudgetView.insert = (requestBody, result) => {
    const query = postByIdQuery(BUDGET_VIEW, requestBody);
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

module.exports = BudgetView;