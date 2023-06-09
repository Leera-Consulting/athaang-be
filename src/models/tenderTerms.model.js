const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_TENDER_TERMS, TENDER_TERMS } = require("../constants/tables");

// Tender terms constructor
const TenderTerms = function(tenderTerms) {
    this.id = tenderTerms.id;
}

// Result all tender terms from the database
TenderTerms.getAll = result =>   {
    const query = getQuery(SMA_TENDER_TERMS);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result all tender terms of a tender header from the database
TenderTerms.getTermsOfTenderHeader = (tender_id, result) =>   {
    const query = `SELECT * from ${SMA_TENDER_TERMS} where tender_hdr_id = ${tender_id}`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a tender term filtered from id from the database
TenderTerms.findById = (id, result) => {
    const query = getByIdQuery(SMA_TENDER_TERMS, id);
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
  
        result(rowNotFoundResult(TENDER_TERMS));
    });
};

// Update a tender term filtered from id from the database
TenderTerms.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_TENDER_TERMS, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a tender term into the database
TenderTerms.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_TENDER_TERMS, requestBody);
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
TenderTerms.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_TENDER_TERMS, requestBody);
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

module.exports = TenderTerms;