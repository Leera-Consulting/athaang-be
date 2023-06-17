const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_PURCHASE_REQ_ITEMS, PURCHASE_REQ_ITEMS } = require('../constants/tables');

// Purchase Req constructor
const PurchaseReqItems = function(purchaseReqItems) {
    this.id = purchaseReqItems.id;
}

// Result all SMA_PURCHASE_REQ_ITEMS from the database
PurchaseReqItems.getAll = result =>   {
    const query = getQuery(SMA_PURCHASE_REQ_ITEMS);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_PURCHASE_REQ_ITEMS filtered from id from the database
PurchaseReqItems.findById = (id, result) => {
    const query = getByIdQuery(SMA_PURCHASE_REQ_ITEMS, id);
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

        result(rowNotFoundResult(PURCHASE_REQ_ITEMS));
    });
};

// Result a SMA_PURCHASE_REQ_ITEMS filtered from purchase req from the database
PurchaseReqItems.findByPurchaseReq = (id, result) => {
    const query = `SELECT * from ${SMA_PURCHASE_REQ_ITEMS} where quantity > 0 and purchase_req_id = ${id}`;
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        if (res.length) {
            result(null, res);
            return;
        } else {
            result(null, []);
            return;
        }

    });
};

// Update a SMA_PURCHASE_REQ_ITEMS filtered from id from the database
PurchaseReqItems.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_PURCHASE_REQ_ITEMS, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMA_PURCHASE_REQ_ITEMS into the database
PurchaseReqItems.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_PURCHASE_REQ_ITEMS, requestBody);
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
PurchaseReqItems.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_PURCHASE_REQ_ITEMS, requestBody);
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

module.exports = PurchaseReqItems;