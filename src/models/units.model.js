const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_UNITS, UNITS } = require('../constants/tables');

// Units constructor
const Units = function(units) {
    this.id = units.id;
}

// Result all sma_units from the database
Units.getAll = result =>   {
    const query = getQuery(SMA_UNITS);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a sma_units filtered from id from the database
Units.findById = (id, result) => {
    const query = getByIdQuery(SMA_UNITS, id);
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

        result(rowNotFoundResult(UNITS));
    });
};

// Update a units filtered from id from the database
Units.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_UNITS, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a units into the database
Units.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_UNITS, requestBody);
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
Units.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_UNITS, requestBody);
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

module.exports = Units;