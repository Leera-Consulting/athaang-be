const { getQuery, getByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_DOCUMENT_TYPE } = require("../constants/tables");

// Document type constructor
const DepartmentType = function(departmentType) {
    this.id = departmentType.id;
    this.document = departmentType.document;
    this.status = departmentType.status;
}

// Result all sma_document_type from the database
DepartmentType.getAll = result =>   {
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
DepartmentType.findById = (id, result) => {
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

        result(rowNotFoundResult("Document Type"));
    });
};

module.exports = DepartmentType;