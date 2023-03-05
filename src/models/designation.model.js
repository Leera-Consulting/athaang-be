const sql = require('./db.js');

// constructor
const Designation = function(designation) {
    this.id = designation.id;
    this.designation = designation.designation;
    this.travel_per_diem = designation.travel_per_diem;
}

Designation.getAll = result =>   {
    const query = "SELECT * FROM sma_designation";
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

Designation.findById = (id, result) => {
    const query = `SELECT * FROM sma_designation WHERE id = ${id}`;
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

module.exports = Designation;