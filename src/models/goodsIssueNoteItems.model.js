const { getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_GOODS_ISSUE_NOTE_ITEMS, GOODS_ISSUE_NOTE_ITEMS } = require('../constants/tables');

// SMA_GOODS_ISSUE_NOTE_ITEMS constructor
const GoodsIssueNoteItems = function(goodsIssueNoteItems) {
    this.id = goodsIssueNoteItems.id;
}

// Result all SMA_GOODS_ISSUE_NOTE_ITEMS from the database
GoodsIssueNoteItems.getAll = result =>   {
    const query = `SELECT * FROM ${SMA_GOODS_ISSUE_NOTE_ITEMS}`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_GOODS_ISSUE_NOTE_ITEMS filtered from id from the database
GoodsIssueNoteItems.findByGinId = (id, result) => {
    const query = `SELECT * FROM ${SMA_GOODS_ISSUE_NOTE_ITEMS} WHERE gin_hdr_id = ${id}`;
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

        result(rowNotFoundResult(GOODS_ISSUE_NOTE_ITEMS));
    });
};

// Update a GoodsIssueNoteItems filtered from id from the database
GoodsIssueNoteItems.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_GOODS_ISSUE_NOTE_ITEMS, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a GoodsIssueNoteItems into the database
GoodsIssueNoteItems.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_GOODS_ISSUE_NOTE_ITEMS, requestBody);
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
GoodsIssueNoteItems.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_GOODS_ISSUE_NOTE_ITEMS, requestBody);
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

module.exports = GoodsIssueNoteItems;