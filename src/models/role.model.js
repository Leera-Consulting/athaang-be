const sql = require('./db.js');

// constructor
const Role = function(role) {
    this.id = role.id;
    this.role = role.role;
}

Role.getAll = result =>   {
    const query = "SELECT * FROM sma_role";
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

Role.findById = (id, result) => {
    const query = `SELECT * FROM sma_role WHERE id = ${id}`;
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

module.exports = Role;