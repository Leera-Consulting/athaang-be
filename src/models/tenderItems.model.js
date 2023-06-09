const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_TENDER_ITEMS, TENDER_ITEMS } = require("../constants/tables");

// Tender Items constructor
const TenderItems = function(tenderItems) {
    this.id = tenderItems.id;
}

// Result all tender Items from the database
TenderItems.getAll = result =>   {
    const query = getQuery(SMA_TENDER_ITEMS);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result all tender Items of a tender header from the database
TenderItems.getItemsOfTenderHeader = (tender_id, result) =>   {
    const query = `SELECT * from ${SMA_TENDER_ITEMS} where tender_hdr_id = ${tender_id}`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a tender term filtered from id from the database
TenderItems.findById = (id, result) => {
    const query = getByIdQuery(SMA_TENDER_ITEMS, id);
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
  
        result(rowNotFoundResult(TENDER_ITEMS));
    });
};

// Update a tender term filtered from id from the database
TenderItems.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_TENDER_ITEMS, requestBody);
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
TenderItems.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_TENDER_ITEMS, requestBody);
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
TenderItems.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_TENDER_ITEMS, requestBody);
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

module.exports = TenderItems;