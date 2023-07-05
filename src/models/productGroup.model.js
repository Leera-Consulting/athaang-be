const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_PRODUCT_GROUP, PRODUCT_GROUP, SMA_PRODUCT, SMA_PRODUCT_OPEN_STOCK } = require('../constants/tables');

// Product group constructor
const ProductGroup = function(productGroup) {
    this.id = productGroup.id;
    this.product_group = productGroup.product_group;
    this.status = productGroup.status;
    this.description = productGroup.description;
}

// Result all sma_product_group from the database
ProductGroup.getAll = result =>   {
    const query = getQuery(SMA_PRODUCT_GROUP);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a sma_product_group filtered from id from the database
ProductGroup.findById = (id, result) => {
    const query = getByIdQuery(SMA_PRODUCT_GROUP, id);
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

        result(rowNotFoundResult(PRODUCT_GROUP));
    });
};

// Get product groups for goods issue note
ProductGroup.findProductGroupForGIN = (result) => {
    const query = `SELECT * FROM ${SMA_PRODUCT_GROUP} where id in ( SELECT product_group FROM ${SMA_PRODUCT} WHERE 1 and id in ( SELECT product_name FROM ${SMA_PRODUCT_OPEN_STOCK} where (opening_stock + receipts - issue)>0 ) ) ORDER BY product_group ASC;`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Update a product group filtered from id from the database
ProductGroup.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_PRODUCT_GROUP, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a product group into the database
ProductGroup.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_PRODUCT_GROUP, requestBody);
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
ProductGroup.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_PRODUCT_GROUP, requestBody);
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

module.exports = ProductGroup;