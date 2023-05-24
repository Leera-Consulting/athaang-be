const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_TENDER_HEADER, TENDER_HEADER, SMA_TENDER_SUPPLIER, SMA_PARTY_MST, SMA_TENDER_SUPPLIER_QUOTE } = require('../constants/tables');

// Tender Header constructor
const TenderHeader = function(tenderHeader) {
    this.id = tenderHeader.id;
}

// Result all SMA_TENDER_HEADER from the database
TenderHeader.getAll = result =>   {
    const query = getQuery(SMA_TENDER_HEADER);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_TENDER_HEADER filtered from id from the database
TenderHeader.findById = (id, result) => {
    const query = getByIdQuery(SMA_TENDER_HEADER, id);
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

        result(rowNotFoundResult(TENDER_HEADER));
    });
};

// Update a SMA_TENDER_HEADER filtered from id from the database
TenderHeader.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_TENDER_HEADER, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMA_TENDER_HEADER into the database
TenderHeader.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_TENDER_HEADER, requestBody);
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

// Get parties of a tender supplier
TenderHeader.tenderSupplierParty = result => {
    const query = `SELECT a.id, a.party_name, b.tender_hdr_id FROM ${SMA_PARTY_MST} a INNER JOIN ${SMA_TENDER_SUPPLIER} b ON a.id = b.supplier_id;`;
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
// 

// Get parties of a tender supplier
TenderHeader.quoteSupplierParty = result => {
    const query = `select * from ${SMA_PARTY_MST} a INNER JOIN ${SMA_TENDER_SUPPLIER_QUOTE} b WHERE a.id = b.supplier_id AND b.rate > 0;`;
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

module.exports = TenderHeader;