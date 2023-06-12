const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_SUPPLIER_INVOICE_DETAILS, SUPPLIER_INVOICE_DETAILS } = require('../constants/tables');

// Supplier Invoice Details constructor
const SupplierInvoiceDetails = function(supplierInvoiceDetails) {
    this.id = supplierInvoiceDetails.id;
}

// Result all SMA_SUPPLIER_INVOICE_DETAILS from the database
SupplierInvoiceDetails.getAll = result =>   {
    const query = getQuery(SMA_SUPPLIER_INVOICE_DETAILS);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_SUPPLIER_INVOICE_DETAILS filtered from id from the database
SupplierInvoiceDetails.findById = (id, result) => {
    const query = `SELECT * FROM ${SMA_SUPPLIER_INVOICE_DETAILS} WHERE si_hdr_id = ${id}`;
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

        result(rowNotFoundResult(SUPPLIER_INVOICE_DETAILS));
    });
};

// Update a SMA_SUPPLIER_INVOICE_DETAILS filtered from id from the database
SupplierInvoiceDetails.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_SUPPLIER_INVOICE_DETAILS, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMA_SUPPLIER_INVOICE_DETAILS into the database
SupplierInvoiceDetails.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_SUPPLIER_INVOICE_DETAILS, requestBody);
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
SupplierInvoiceDetails.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_SUPPLIER_INVOICE_DETAILS, requestBody);
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

module.exports = SupplierInvoiceDetails;