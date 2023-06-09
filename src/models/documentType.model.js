const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_DOCUMENT_TYPE, DOCUMENT_TYPE } = require("../constants/tables");

// Document type constructor
const DocumentType = function(departmentType) {
    this.id = departmentType.id;
    this.document = departmentType.document;
    this.status = departmentType.status;
}

// Result all sma_document_type from the database
DocumentType.getAll = result =>   {
    const query = getQuery(SMA_DOCUMENT_TYPE);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_document_type filtered from id from the database
DocumentType.findById = (id, result) => {
    const query = getByIdQuery(SMA_DOCUMENT_TYPE, id);
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

        result(rowNotFoundResult(DOCUMENT_TYPE));
    });
};

// Update a document type filtered from id from the database
DocumentType.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_DOCUMENT_TYPE, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a document type into the database
DocumentType.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_DOCUMENT_TYPE, requestBody);
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
DocumentType.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_DOCUMENT_TYPE, requestBody);
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

module.exports = DocumentType;