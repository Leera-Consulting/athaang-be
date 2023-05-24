const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_WORKFLOW_TYPE, WORKFLOW_TYPE, SMA_WORKFLOW } = require("../constants/tables");

// Workflow Type constructor
const WorkflowType = function(workflowType) {
    this.id = workflowType.id;
    this.order_no = workflowType.order_no;
    this.special_terms = workflowType.special_terms;
}

// Result all workflowType from the database
WorkflowType.getAll = result =>   {
    const query = getQuery(SMA_WORKFLOW_TYPE);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a workflowType filtered from id from the database
WorkflowType.findById = (id, result) => {
    const query = getByIdQuery(SMA_WORKFLOW_TYPE, id);
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
  
        result(rowNotFoundResult(WORKFLOW_TYPE));
    });
};

// Update a workflowType filtered from id from the database
WorkflowType.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_WORKFLOW_TYPE, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a workflowType into the database
WorkflowType.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_WORKFLOW_TYPE, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Result workflow types for travel/reimbursement
WorkflowType.getReimbursementWorkflowTypes = (requestBody, result) =>   {
    const query = `SELECT b.* FROM sma_workflow a, sma_workflow_type b where b.id = a.trans_Type and company_id = ${requestBody?.company_id} and b.status = 'Y' and a.doc_Type = 'RE'`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};


// Result all tender workflow types
WorkflowType.getAllTenderWorkflowTypes = result =>   {
    const query = `SELECT * FROM ${SMA_WORKFLOW_TYPE} WHERE doc_type = 'TN' AND status = 'Y';`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

module.exports = WorkflowType;