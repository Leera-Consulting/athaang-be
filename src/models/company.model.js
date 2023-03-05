const sql = require('./db.js');

// constructor
const Company = function(company) {
    this.id = company.id;
}

Company.getAll = result =>   {
    const query = "SELECT * from company";
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

Company.findById = (id, result) => {
    const query = `SELECT * from company WHERE comp_id = ${id}`;
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

module.exports = Company;