const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_HELP, HELP } = require("../constants/tables");

// Help constructor
const Help = function(help) {
    this.id = help.id;
    this.code = help.code;
    this.description = help.description;
    this.program_name = help.program_name;
    this.status = help.status;
}

// Result all sma_help from the database
Help.getAll = result =>   {
    const query = getQuery(SMA_HELP);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_help filtered from id from the database
Help.findById = (id, result) => {
    const query = getByIdQuery(SMA_HELP, id);
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
  
        result(rowNotFoundResult(HELP));
    });
};

// Update a sma_help filtered from id from the database
Help.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_HELP, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a sma_help into the database
Help.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_HELP, requestBody);
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
Help.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_HELP, requestBody);
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

module.exports = Help;