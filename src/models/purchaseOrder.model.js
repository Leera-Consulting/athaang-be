const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_PURCHASE_ORDER, PURCHASE_ORDER } = require('../constants/tables');

// Purchase Order constructor
const PurchaseOrder = function(purchaseOrder) {
    this.id = purchaseOrder.id;
}

// Result all SMA_PURCHASE_ORDER from the database
PurchaseOrder.getAll = result =>   {
    const query = getQuery(SMA_PURCHASE_ORDER);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_PURCHASE_ORDER filtered from id from the database
PurchaseOrder.findById = (id, result) => {
    const query = getByIdQuery(SMA_PURCHASE_ORDER, id);
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

        result(rowNotFoundResult(PURCHASE_ORDER));
    });
};

// Update a SMA_PURCHASE_ORDER filtered from id from the database
PurchaseOrder.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_PURCHASE_ORDER, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMA_PURCHASE_ORDER into the database
PurchaseOrder.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_PURCHASE_ORDER, requestBody);
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

module.exports = PurchaseOrder;