const sql = require('./db.js');

// constructor
const Department = function(department) {
    this.id = department.id;
    this.code = department.code;
    this.name = department.name;
    this.dept_code = department.dept_code;
}

Department.getAll = result =>   {
    const query = "SELECT * FROM sma_department";
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

Department.findById = (id, result) => {
    const query = `SELECT * FROM sma_department WHERE id = ${id}`;
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
  
      // not found User with the id
      result({ kind: "not_found" }, null);
    });
};

module.exports = Department;