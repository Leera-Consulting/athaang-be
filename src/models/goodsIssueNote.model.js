const { getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_GOODS_ISSUE_NOTE, GOODS_ISSUE_NOTE } = require('../constants/tables');

// SMA_GOODS_ISSUE_NOTE constructor
const GoodsIssueNote = function(goodsIssueNote) {
    this.id = goodsIssueNote.id;
}

// Result all SMA_GOODS_ISSUE_NOTE from the database
GoodsIssueNote.getAll = result =>   {
    const query = `SELECT * FROM ${SMA_GOODS_ISSUE_NOTE} WHERE 1 AND del != 'Y'`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a SMA_GOODS_ISSUE_NOTE filtered from id from the database
GoodsIssueNote.findById = (id, result) => {
    const query = getByIdQuery(SMA_GOODS_ISSUE_NOTE, id);
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

        result(rowNotFoundResult(GOODS_ISSUE_NOTE));
    });
};

// Update a GoodsIssueNote filtered from id from the database
GoodsIssueNote.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_GOODS_ISSUE_NOTE, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a GoodsIssueNote into the database
GoodsIssueNote.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_GOODS_ISSUE_NOTE, requestBody);
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
GoodsIssueNote.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_GOODS_ISSUE_NOTE, requestBody);
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

module.exports = GoodsIssueNote;