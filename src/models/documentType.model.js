const sql = require('./db.js');

// constructor
const DepartmentType = function(departmentType) {
    this.id = departmentType.id;
    this.document = departmentType.document;
    this.status = departmentType.status;
}

DepartmentType.getAll = result =>   {
    const query = "SELECT * from sma_document_type";
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

DepartmentType.findById = (id, result) => {
    const query = `SELECT * from sma_document_type WHERE id = ${id}`;
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

        result({ kind: "not_found" }, null);
    });
};

module.exports = DepartmentType;