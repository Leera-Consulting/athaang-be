const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { GST_MST } = require('../constants/tables');

// GST Master constructor
const GSTMaster = function(gstMaster) {
    this.id = gstMaster.id;
}

// Result all GST_MST from the database
GSTMaster.getAll = result =>   {
    const query = getQuery(GST_MST);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a GST_MST filtered from id from the database
GSTMaster.findById = (id, result) => {
    const query = getByIdQuery(GST_MST, id);
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

        result(rowNotFoundResult(GST_MST));
    });
};

// Update a GSTMaster filtered from id from the database
GSTMaster.updateById = (requestBody, result) => {
    const query = putByIdQuery(GST_MST, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a GSTMaster into the database
GSTMaster.insert = (requestBody, result) => {
    const query = postByIdQuery(GST_MST, requestBody);
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
GSTMaster.delete = (requestBody, result) => {
    const query = deleteByIdQuery(GST_MST, requestBody);
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

module.exports = GSTMaster;