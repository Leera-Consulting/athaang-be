const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_LOCATION, LOCATION } = require("../constants/tables");

// Location constructor
const Location = function(location) {
    this.id = location.id;
    this.loc_name = location.loc_name;
    this.loc_code = location.loc_code;
    this.loc_comp_id = location.loc_comp_id;
}

// Result all sma_location from the database
Location.getAll = result =>   {
    const query = getQuery(SMA_LOCATION);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_location filtered from id from the database
Location.findById = (id, result) => {
    const query = getByIdQuery(SMA_LOCATION, id);
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
  
        result(rowNotFoundResult(LOCATION));
    });
};

// Update a sma_location filtered from id from the database
Location.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_LOCATION, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a Location into the database
Location.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_LOCATION, requestBody);
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

module.exports = Location;