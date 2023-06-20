const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { USER_LOGIN } = require("../constants/tables");

// Userlogin constructor
const UserLogin = function(userLogin) {
    this.id = userLogin.id;
}

// Result all UserLogin from the database
UserLogin.getAll = result =>   {
    const query = getQuery(USER_LOGIN);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a UserLogin filtered from id from the database
UserLogin.findById = (id, result) => {
    const query = getByIdQuery(USER_LOGIN, id);
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
  
        result(rowNotFoundResult(USER_LOGIN));
    });
};

// Update a UserLogin filtered from id from the database
UserLogin.updateById = (requestBody, result) => {
    const query = putByIdQuery(USER_LOGIN, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a UserLogin into the database
UserLogin.insert = (requestBody, result) => {
    const query = postByIdQuery(USER_LOGIN, requestBody);
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
UserLogin.delete = (requestBody, result) => {
    const query = deleteByIdQuery(USER_LOGIN, requestBody);
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

module.exports = UserLogin;