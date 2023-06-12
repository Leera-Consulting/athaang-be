const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_COMMENT, COMMENT } = require("../constants/tables");

// Comment constructor
const Comment = function(comment) {
    this.id = comment.id;
}

// Result all Comment from the database
Comment.getAll = result =>   {
    const query = getQuery(SMA_COMMENT);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a Comment filtered from id from the database
Comment.findById = (id, result) => {
    const query = getByIdQuery(SMA_COMMENT, id);
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
  
        result(rowNotFoundResult(COMMENT));
    });
};

// Result all Comment for travel expense
Comment.findCommentsForTravelExpense = (te_id, result) =>   {
    const query = `SELECT * from ${SMA_COMMENT} where doc_id = ${te_id} and doc_type = 'TE' order by id desc`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result all Comment for supplier invoice
Comment.findCommentsForSupplierInvoice = (si_id, result) =>   {
    const query = `SELECT * from ${SMA_COMMENT} where doc_id = ${si_id} and doc_type = 'SI' order by id desc`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Update a Comment filtered from id from the database
Comment.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_COMMENT, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a Comment into the database
Comment.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_COMMENT, requestBody);
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
Comment.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_COMMENT, requestBody);
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

module.exports = Comment;