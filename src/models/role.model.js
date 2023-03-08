const { getQuery, getByIdQuery, rowNotFoundResult } = require('../utils/db.js');
const sql = require('./db.js');

// Role constructor
const Role = function(role) {
    this.id = role.id;
    this.role = role.role;
}

// Result all sma_role from the database
Role.getAll = result =>   {
    const query = getQuery("sma_role");
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_role filtered from id from the database
Role.findById = (id, result) => {
    const query = getByIdQuery("sma_role", id);
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
        
        result(rowNotFoundResult("Role"));
    });
};

module.exports = Role;