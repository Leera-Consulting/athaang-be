const { getQuery, getByIdQuery } = require('../utils/db');
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

        result(rowNotFoundResult("Company"));
    });
};

module.exports = Company;