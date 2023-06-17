const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_PRODUCT, PRODUCT } = require('../constants/tables');

// Product constructor
const Product = function(product) {
    this.id = product.id;
    this.name = product.name;
    this.vertical_type = product.vertical_type;
    this.exp_flag = product.exp_flag;
    this.po_threashold = product.po_threashold;
    this.product_group = product.product_group;
    this.category = product.category;
    this.uom = product.uom;
    this.tolerance_level = product.tolerance_level;
    this.gst_type = product.gst_type;
    this.budget_code = product.budget_code;
    this.budget_name = product.budget_name;
    this.hsn_code = product.hsn_code;
    this.status = product.status;
    this.approval_status = product.approval_status;
    this.current_approver = product.current_approver;
    this.approver_1 = product.approver_1;
    this.approver_1_status = product.approver_1_status;
}

// Result all sma_product from the database
Product.getAll = result =>   {
    const query = getQuery(SMA_PRODUCT);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a sma_product filtered from id from the database
Product.findById = (id, result) => {
    const query = getByIdQuery(SMA_PRODUCT, id);
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

        result(rowNotFoundResult(PRODUCT));
    });
};

// Update a product filtered from id from the database
Product.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_PRODUCT, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a product into the database
Product.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_PRODUCT, requestBody);
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
Product.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_PRODUCT, requestBody);
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

module.exports = Product;