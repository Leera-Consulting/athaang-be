const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_SUPPLIER_INVOICE, SUPPLIER_INVOICE } = require('../constants/tables');

// Supplier Invoice constructor
const SupplierInvoice = function(supplierInvoice) {
    this.id = supplierInvoice.id;
}

// Result all SMA_SUPPLIER_INVOICE from the database
SupplierInvoice.getAll = result =>   {
    const query = getQuery(SMA_SUPPLIER_INVOICE);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_SUPPLIER_INVOICE filtered from id from the database
SupplierInvoice.findById = (id, result) => {
    const query = getByIdQuery(SMA_SUPPLIER_INVOICE, id);
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

        result(rowNotFoundResult(SUPPLIER_INVOICE));
    });
};

// filter
SupplierInvoice.filter = (params, result) => {
    let filterString = "";

    if (params.status)  {
        filterString += `status = ${params.status} AND `
    }
    if (params.suplier_name)  {
        filterString += `suplier_name = ${params.suplier_name} AND `
    }
    if (params.decision)  {
        filterString += `approval_status = ${params.decision} AND `
    }

    if (filterString != "") {
        filterString = filterString.slice(0, -5)
    }

    const query = `SELECT * FROM ${SMA_SUPPLIER_INVOICE} WHERE ${filterString}`;
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
        }

    });
};

// Update a SMA_SUPPLIER_INVOICE filtered from id from the database
SupplierInvoice.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_SUPPLIER_INVOICE, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMA_SUPPLIER_INVOICE into the database
SupplierInvoice.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_SUPPLIER_INVOICE, requestBody);
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
SupplierInvoice.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_SUPPLIER_INVOICE, requestBody);
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

module.exports = SupplierInvoice;