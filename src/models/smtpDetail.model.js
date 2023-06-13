const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMTP_DETAIL, SMTP_DTL } = require("../constants/tables");

// SMTP detail constructor
const SmtpDetail = function(smptDetail) {
    this.id = smptDetail.id;
    this.country_id = smptDetail.country_id;
    this.state_name = smptDetail.state_name;
}

// Result all SMTP detail from the database
SmtpDetail.getAll = result =>   {
    const query = getQuery(SMTP_DTL);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a SMTP detail filtered from id from the database
SmtpDetail.findById = (id, result) => {
    const query = getByIdQuery(SMTP_DTL, id);
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
  
        result(rowNotFoundResult(SMTP_DETAIL));
    });
};

// Update a SMTP detail filtered from id from the database
SmtpDetail.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMTP_DTL, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a SMTP detail into the database
SmtpDetail.insert = (requestBody, result) => {
    const query = `UPDATE ${SMTP_DTL} SET username=${requestBody?.username} password=${requestBody?.password} port=${requestBody?.port} WHERE host = ${requestBody.host}`;
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
SmtpDetail.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMTP_DTL, requestBody);
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

module.exports = SmtpDetail;