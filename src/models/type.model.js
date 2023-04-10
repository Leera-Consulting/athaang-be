const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_TYPE, TYPE } = require('../constants/tables');

// Type constructor
const Type = function(category) {
    this.id = category.id;
}

// Result all SMA_TYPE from the database
Type.getAll = result =>   {
    const query = getQuery(SMA_TYPE);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_TYPE filtered from id from the database
Type.findById = (id, result) => {
    const query = getByIdQuery(SMA_TYPE, id);
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

        result(rowNotFoundResult(TYPE));
    });
};

// Update a Type filtered from id from the database
Type.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_TYPE, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a Type into the database
Type.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_TYPE, requestBody);
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

module.exports = Type;