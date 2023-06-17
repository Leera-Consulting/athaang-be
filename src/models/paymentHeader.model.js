const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { PAYMENT_HEADER } = require("../constants/tables")

// Payment header constructor
const PaymentHeader = function(paymentHeader) {
    this.id = paymentHeader.id;
}

// Result all payment-header from the database
PaymentHeader.getAll = result =>   {
    const query = getQuery(PAYMENT_HEADER);
    sql.query(query, (err, res) => {
        if (err)    {
            result(err, null);
            return;
        }

        result(null, res);
    });
};

// Result a payment_header filtered from id from the database
PaymentHeader.findById = (id, result) => {
    const query = getByIdQuery(PAYMENT_HEADER, id);
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

        result(rowNotFoundResult(PAYMENT_HEADER));
    });
};

// Update a payment header filtered from id from the database
PaymentHeader.updateById = (requestBody, result) => {
    const query = putByIdQuery(PAYMENT_HEADER, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a payment header into the database
PaymentHeader.insert = (requestBody, result) => {
    const query = postByIdQuery(PAYMENT_HEADER, requestBody);
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
PaymentHeader.delete = (requestBody, result) => {
    const query = deleteByIdQuery(PAYMENT_HEADER, requestBody);
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

module.exports = PaymentHeader;