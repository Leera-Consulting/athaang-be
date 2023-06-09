const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_TENDER_FILEUPLOAD, TENDER_FILEUPLOAD } = require("../constants/tables");

// Tender FileUpload constructor
const TenderFileUpload = function(tenderFileUpload) {
    this.id = tenderFileUpload.id;
}

// Result all tender FileUpload from the database
TenderFileUpload.getAll = result =>   {
    const query = getQuery(SMA_TENDER_FILEUPLOAD);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result all tender FileUpload of a tender header from the database
TenderFileUpload.getFileUploadOfTenderHeader = (tender_id, result) =>   {
    const query = `SELECT * FROM ${SMA_TENDER_FILEUPLOAD} WHERE 1 AND tender_hdr_id = ${tender_id}`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a tender file upload filtered from id from the database
TenderFileUpload.findById = (id, result) => {
    const query = getByIdQuery(SMA_TENDER_FILEUPLOAD, id);
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
  
        result(rowNotFoundResult(TENDER_FILEUPLOAD));
    });
};

// Update a tender file upload filtered from id from the database
TenderFileUpload.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_TENDER_FILEUPLOAD, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a tender file upload into the database
TenderFileUpload.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_TENDER_FILEUPLOAD, requestBody);
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
TenderFileUpload.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_TENDER_FILEUPLOAD, requestBody);
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

module.exports = TenderFileUpload;