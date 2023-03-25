const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { CITIES } = require("../constants/tables");

// Cities constructor
const Cities = function(cities) {
    this.id = cities.id;
    this.city_name = cities.city_name;
    this.states_id = cities.states_id;
    this.state_name = cities.state_name;
}

// Result all Cities from the database
Cities.getAll = result =>   {
    const query = getQuery(CITIES);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a Cities filtered from id from the database
Cities.findById = (id, result) => {
    const query = getByIdQuery(CITIES, id);
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
  
        result(rowNotFoundResult(CITIES));
    });
};

// Update a Cities filtered from id from the database
Cities.updateById = (requestBody, result) => {
    const query = putByIdQuery(CITIES, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a Cities into the database
Cities.insert = (requestBody, result) => {
    const query = postByIdQuery(CITIES, requestBody);
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

module.exports = Cities;