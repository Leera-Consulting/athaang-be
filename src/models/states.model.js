const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { STATES } = require("../constants/tables");

// States constructor
const States = function(states) {
    this.id = states.id;
    this.country_id = states.country_id;
    this.state_name = states.state_name;
}

// Result all states from the database
States.getAll = result =>   {
    const query = getQuery(STATES);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a state filtered from id from the database
States.findById = (id, result) => {
    const query = getByIdQuery(STATES, id);
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
  
        result(rowNotFoundResult(STATES));
    });
};

// Update a states filtered from id from the database
States.updateById = (requestBody, result) => {
    const query = putByIdQuery(STATES, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a state into the database
States.insert = (requestBody, result) => {
    const query = postByIdQuery(STATES, requestBody);
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
States.delete = (requestBody, result) => {
    const query = deleteByIdQuery(STATES, requestBody);
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

module.exports = States;