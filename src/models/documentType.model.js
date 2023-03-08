const { getQuery, getByIdQuery, rowNotFoundResult } = require('../utils/db.js');
const sql = require('./db.js');

// Document type constructor
const DepartmentType = function(departmentType) {
    this.id = departmentType.id;
    this.document = departmentType.document;
    this.status = departmentType.status;
}

// Result all sma_document_type from the database
DepartmentType.getAll = result =>   {
    const query = getQuery("sma_document_type");
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
    const query = getByIdQuery("sma_document_type", id);
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