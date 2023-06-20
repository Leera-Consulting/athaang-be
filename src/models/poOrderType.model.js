const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { PO_ORDER_TYPE } = require('../constants/tables');

// PO Order Type constructor
const POOrderType = function(poOrderType) {
    this.id = poOrderType.id;
}

// Result all PO_ORDER_TYPE from the database
POOrderType.getAll = result =>   {
    const query = getQuery(PO_ORDER_TYPE);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a PO_ORDER_TYPE filtered from id from the database
POOrderType.findById = (id, result) => {
    const query = getByIdQuery(PO_ORDER_TYPE, id);
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

        result(rowNotFoundResult(PO_ORDER_TYPE));
    });
};

// Update a POOrderType filtered from id from the database
POOrderType.updateById = (requestBody, result) => {
    const query = putByIdQuery(PO_ORDER_TYPE, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a POOrderType into the database
POOrderType.insert = (requestBody, result) => {
    const query = postByIdQuery(PO_ORDER_TYPE, requestBody);
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
POOrderType.delete = (requestBody, result) => {
    const query = deleteByIdQuery(PO_ORDER_TYPE, requestBody);
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

module.exports = POOrderType;