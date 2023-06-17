const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { USERACCESS, USER } = require("../constants/tables");

// Useraccess constructor
const Useraccess = function(useraccess) {
    this.id = useraccess.id;
}

// Result all useraccess from the database
Useraccess.getAll = result =>   {
    const query = getQuery(USERACCESS);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a USERACCESS filtered from id from the database
Useraccess.findById = (id, result) => {
    const query = getByIdQuery(USERACCESS, id);
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
  
        result(rowNotFoundResult(USERACCESS));
    });
};

// Update a USERACCESS filtered from id from the database
Useraccess.updateById = (requestBody, result) => {
    const query = putByIdQuery(USERACCESS, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Bulk Update a USERACCESS filtered from id from the database
Useraccess.bulkUpdateById = (requestBody, result) => {
    let response;
    for(const row of requestBody) {
        const query = putByIdQuery(USERACCESS, row);
        sql.query(query, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
      
            response = res;
        });
    }
    result(null, response);
}

// Insert a USERACCESS into the database
Useraccess.insert = (requestBody, result) => {
    const query = postByIdQuery(USERACCESS, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Get user access of a user role
Useraccess.getUseraccessOfUserRole = (user_role, result) => {
    const query = `SELECT * FROM ${USERACCESS} WHERE user_role = ${user_role};`;
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
Useraccess.delete = (requestBody, result) => {
    const query = deleteByIdQuery(USERACCESS, requestBody);
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

module.exports = Useraccess;