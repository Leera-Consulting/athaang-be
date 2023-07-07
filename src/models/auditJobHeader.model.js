const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { AUDIT_JOB_HEADER } = require('../constants/tables');

// Audit Job Header constructor
const AuditJobHeader = function(auditJobHeader) {
    this.id = auditJobHeader.id;
}

// Result all AUDIT_JOB_HEADER from the database
AuditJobHeader.getAll = result =>   {
    const query = getQuery(AUDIT_JOB_HEADER);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a AUDIT_JOB_HEADER filtered from id from the database
AuditJobHeader.findById = (id, result) => {
    const query = getByIdQuery(AUDIT_JOB_HEADER, id);
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

        result(rowNotFoundResult(AUDIT_JOB_HEADER));
    });
};

// Update a AUDIT_JOB_HEADER filtered from id from the database
AuditJobHeader.updateById = (requestBody, result) => {
    const query = putByIdQuery(AUDIT_JOB_HEADER, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a AUDIT_JOB_HEADER into the database
AuditJobHeader.insert = (requestBody, result) => {
    const query = postByIdQuery(AUDIT_JOB_HEADER, requestBody);
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
AuditJobHeader.delete = (requestBody, result) => {
    const query = deleteByIdQuery(AUDIT_JOB_HEADER, requestBody);
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

module.exports = AuditJobHeader;