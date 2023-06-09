const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { COMPANY } = require("../constants/tables");

// Company constructor
const Company = function(company) {
    this.id = company.id;
}

// Result all company from the database
Company.getAll = result =>   {
    const query = getQuery(COMPANY);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a company filtered from id from the database
Company.findById = (id, result) => {
    const query = getByIdQuery(COMPANY, id);
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

        result(rowNotFoundResult(COMPANY));
    });
};

// Update a company filtered from id from the database
Company.updateById = (requestBody, result) => {
    const query = putByIdQuery(COMPANY, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a company into the database
Company.insert = (requestBody, result) => {
    const query = postByIdQuery(COMPANY, requestBody);
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
Company.delete = (requestBody, result) => {
    const query = deleteByIdQuery(COMPANY, requestBody);
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

module.exports = Company;