const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_FINANCIAL_YEAR, FINANCIAL_YEAR } = require("../constants/tables");

// FinancialYear constructor
const FinancialYear = function(financialYear) {
    this.id = financialYear.id;
    this.from_date = financialYear.from_date;
    this.to_date = financialYear.to_date;
    this.short_fy_code = financialYear.short_fy_code;
    this.status = financialYear.status;
}

// Result all sma_financial_year from the database
FinancialYear.getAll = result =>   {
    const query = getQuery(SMA_FINANCIAL_YEAR);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_financial_year filtered from id from the database
FinancialYear.findById = (id, result) => {
    const query = getByIdQuery(SMA_FINANCIAL_YEAR, id);
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
  
        result(rowNotFoundResult(FINANCIAL_YEAR));
    });
};

// Update a sma_financial_year filtered from id from the database
FinancialYear.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_FINANCIAL_YEAR, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a sma_financial_year into the database
FinancialYear.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_FINANCIAL_YEAR, requestBody);
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
FinancialYear.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_FINANCIAL_YEAR, requestBody);
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

module.exports = FinancialYear;