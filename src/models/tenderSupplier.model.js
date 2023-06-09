const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_TENDER_SUPPLIER, TENDER_SUPPLIER, SMA_PARTY_MST } = require('../constants/tables');

// Tender Supplier constructor
const TenderSupplier = function(tenderSupplier) {
    this.id = tenderSupplier.id;
}

// Result all SMA_TENDER_SUPPLIER from the database
TenderSupplier.getAll = result =>   {
    const query = getQuery(SMA_TENDER_SUPPLIER);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result all tender suppliers of a tender header from the database
TenderSupplier.getSuppliersOfTenderHeader = (tender_id, result) =>   {
    const query = `SELECT a.*, b.party_name from ${SMA_TENDER_SUPPLIER} a, ${SMA_PARTY_MST} b where b.id = a.supplier_id and tender_hdr_id = ${tender_id};`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_TENDER_SUPPLIER filtered from id from the database
TenderSupplier.findById = (id, result) => {
    const query = getByIdQuery(SMA_TENDER_SUPPLIER, id);
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

        result(rowNotFoundResult(TENDER_SUPPLIER));
    });
};

// Update a SMA_TENDER_SUPPLIER filtered from id from the database
TenderSupplier.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_TENDER_SUPPLIER, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMA_TENDER_SUPPLIER into the database
TenderSupplier.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_TENDER_SUPPLIER, requestBody);
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
TenderSupplier.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_TENDER_SUPPLIER, requestBody);
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

module.exports = TenderSupplier;