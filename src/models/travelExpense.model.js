const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_TRAVEL_EXPENSES, TRAVEL_EXPENSES } = require("../constants/tables");

// Travel Expense constructor
const TravelExpense = function(travelExpense) {
    this.id = travelExpense.id;
}

// Result all travel expenses from the database
TravelExpense.getAll = result =>   {
    const query = getQuery(SMA_TRAVEL_EXPENSES);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a travel expense filtered from id from the database
TravelExpense.findById = (id, result) => {
    const query = getByIdQuery(SMA_TRAVEL_EXPENSES, id);
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
  
        result(rowNotFoundResult(TRAVEL_EXPENSES));
    });
};

// Update a travel expense filtered from id from the database
TravelExpense.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_TRAVEL_EXPENSES, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a travel expense into the database
TravelExpense.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_TRAVEL_EXPENSES, requestBody);
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

module.exports = TravelExpense;