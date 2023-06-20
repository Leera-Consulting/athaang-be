const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_WORKFLOW } = require('../constants/tables');

// Workflow constructor
const Workflow = function(workflow) {
    this.id = workflow.id;
}

// Result all sma_workflow from the database
Workflow.getAll = result =>   {
    const query = getQuery(SMA_WORKFLOW);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a Workflow filtered from id from the database
Workflow.findById = (id, result) => {
    const query = getByIdQuery(SMA_WORKFLOW, id);
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

        result(rowNotFoundResult(SMA_WORKFLOW));
    });
};

// filter
Workflow.filter = (params, result) => {
    let filterString = "";

    if (params.doc_type)  {
        filterString += `doc_type = ${params.doc_type} AND `
    }
    if (params.company)  {
        filterString += `company_id = ${params.company} AND `
    }
    if (params.workflow)  {
        filterString += `trans_type = ${params.workflow} AND `
    }

    if (filterString != "") {
        filterString = filterString.slice(0, -5)
    }

    const query = `SELECT * FROM ${SMA_WORKFLOW} WHERE ${filterString}`;
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        if (res.length) {
            result(null, res);
            return;
        } else {
            result(null, []);
        }

    });
};

// Update a Workflow filtered from id from the database
Workflow.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_WORKFLOW, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a Workflow into the database
Workflow.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_WORKFLOW, requestBody);
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
Workflow.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_WORKFLOW, requestBody);
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

module.exports = Workflow;