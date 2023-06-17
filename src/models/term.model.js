const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery} = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_TERM, TERM } = require("../constants/tables");

// Term constructor
const Term = function(term) {
    this.id = term.id;
    this.order_no = term.order_no;
    this.special_terms = term.special_terms;
}

// Result all term from the database
Term.getAll = result =>   {
    const query = getQuery(SMA_TERM);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a term filtered from id from the database
Term.findById = (id, result) => {
    const query = getByIdQuery(SMA_TERM, id);
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
  
        result(rowNotFoundResult(TERM));
    });
};

// Update a term filtered from id from the database
Term.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_TERM, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a term into the database
Term.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_TERM, requestBody);
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
Term.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_TERM, requestBody);
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

module.exports = Term;