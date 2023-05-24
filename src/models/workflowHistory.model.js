const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { WORKFLOW_HISTORY } = require("../constants/tables");

// Workflow history constructor
const WorkflowHistory = function(workflowHistory) {
    this.id = workflowHistory.id;
}

// Result all workflowHistory from the database
WorkflowHistory.getAll = result =>   {
    const query = getQuery(WORKFLOW_HISTORY);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a workflowHistory filtered from id from the database
WorkflowHistory.findById = (id, result) => {
    const query = getByIdQuery(WORKFLOW_HISTORY, id);
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
  
        result(rowNotFoundResult(WORKFLOW_HISTORY));
    });
};

// Update a workflowHistory filtered from id from the database
WorkflowHistory.updateById = (requestBody, result) => {
    const query = putByIdQuery(WORKFLOW_HISTORY, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a workflowHistory into the database
WorkflowHistory.insert = (requestBody, result) => {
    const query = postByIdQuery(WORKFLOW_HISTORY, requestBody);
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

// Result all workflowHistory of a given document from the database
WorkflowHistory.getWorkflowHistoryOfDocument = (doc_id, result) =>   {
    const query = `SELECT * FROM workflow_history WHERE doc_id=${doc_id} AND doc_type = 'TA' ORDER BY id DESC;`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result workflow types for travel expenses
WorkflowHistory.getTravelExpenseWorkhistory = (te_id, result) =>   {
    const query = `SELECT * from workflow_history where doc_id = ${te_id} and doc_type = 'TE' order by id desc `;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result workflow types for reimbursements
WorkflowHistory.getReimbursementWorkhistory = (re_id, result) =>   {
    const query = `SELECT * from workflow_history where doc_id = ${re_id} and doc_type = 'RE' order by id desc `;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

module.exports = WorkflowHistory;