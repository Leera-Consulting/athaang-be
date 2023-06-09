const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_PURCHASE_REQ, PURCHASE_REQ } = require('../constants/tables');

// Purchase Req constructor
const PurchaseReq = function(purchaseReq) {
    this.id = purchaseReq.id;
}

// Result all sma_purchase_req from the database
PurchaseReq.getAll = result =>   {
    const query = getQuery(SMA_PURCHASE_REQ);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_purchase_req filtered from id from the database
PurchaseReq.findById = (id, result) => {
    const query = getByIdQuery(SMA_PURCHASE_REQ, id);
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

        result(rowNotFoundResult(PURCHASE_REQ));
    });
};

// Update a sma_purchase_req filtered from id from the database
PurchaseReq.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_PURCHASE_REQ, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a sma_purchase_req into the database
PurchaseReq.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_PURCHASE_REQ, requestBody);
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
PurchaseReq.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_PURCHASE_REQ, requestBody);
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

module.exports = PurchaseReq;