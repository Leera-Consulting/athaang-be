const { getQuery, getByIdQuery, rowNotFoundResult } = require('../utils/db.js');
const sql = require('./db.js');

// Department constructor
const Department = function(department) {
    this.id = department.id;
    this.code = department.code;
    this.name = department.name;
    this.dept_code = department.dept_code;
}

// Result all sma_department from the database
Department.getAll = result =>   {
    const query = getQuery("sma_department");
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_department filtered from id from the database
Department.findById = (id, result) => {
    const query = getByIdQuery("sma_department", id);
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
  
        result(rowNotFoundResult("Department"));
    });
};

module.exports = Department;