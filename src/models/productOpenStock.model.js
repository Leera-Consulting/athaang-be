const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_PRODUCT_OPEN_STOCK, PRODUCT_OPEN_STOCK } = require('../constants/tables');

// Product Open Stock constructor
const ProductOpenStock = function(productOpenStock) {
    this.id = productOpenStock.id;
}

// Result all SMA_PRODUCT_OPEN_STOCK from the database
ProductOpenStock.getAll = result =>   {
    const query = getQuery(SMA_PRODUCT_OPEN_STOCK);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_PRODUCT_OPEN_STOCK filtered from id from the database
ProductOpenStock.findById = (id, result) => {
    const query = getByIdQuery(SMA_PRODUCT_OPEN_STOCK, id);
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

        result(rowNotFoundResult(PRODUCT_OPEN_STOCK));
    });
};

// Update a SMA_PRODUCT_OPEN_STOCK filtered from id from the database
ProductOpenStock.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_PRODUCT_OPEN_STOCK, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMA_PRODUCT_OPEN_STOCK into the database
ProductOpenStock.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_PRODUCT_OPEN_STOCK, requestBody);
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
ProductOpenStock.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_PRODUCT_OPEN_STOCK, requestBody);
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

module.exports = ProductOpenStock;