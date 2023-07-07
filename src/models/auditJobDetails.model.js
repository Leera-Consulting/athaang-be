const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { AUDIT_JOB_DETAILS } = require('../constants/tables');

// Audit Job Details constructor
const AuditJobDetails = function(auditJobDetails) {
    this.id = auditJobDetails.id;
}

// Result all AUDIT_JOB_DETAILS from the database
AuditJobDetails.getAll = result =>   {
    const query = getQuery(AUDIT_JOB_DETAILS);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a AUDIT_JOB_DETAILS filtered from id from the database
AuditJobDetails.findById = (id, result) => {
    const query = getByIdQuery(AUDIT_JOB_DETAILS, id);
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

        result(rowNotFoundResult(AUDIT_JOB_DETAILS));
    });
};

// Result a AUDIT_JOB_DETAILS filtered from audit_job_hdr_id from the database
AuditJobDetails.findByHeaderId = (audit_job_hdr_id, result) => {
    const query = `SELECT * from ${AUDIT_JOB_DETAILS} where 1 and audit_job_hdr_id = ${audit_job_hdr_id};`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Update a AUDIT_JOB_DETAILS filtered from id from the database
AuditJobDetails.updateById = (requestBody, result) => {
    const query = putByIdQuery(AUDIT_JOB_DETAILS, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a AUDIT_JOB_DETAILS into the database
AuditJobDetails.insert = (requestBody, result) => {
    const query = postByIdQuery(AUDIT_JOB_DETAILS, requestBody);
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
AuditJobDetails.delete = (requestBody, result) => {
    const query = deleteByIdQuery(AUDIT_JOB_DETAILS, requestBody);
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

module.exports = AuditJobDetails;