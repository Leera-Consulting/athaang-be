const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_PARTY_MST, PARTY_MST } = require("../constants/tables")

// Party Mst constructor
const PartyMst = function(partyMst) {
    this.id = partyMst.id;
}

// Result all Party Mst from the database
PartyMst.getAll = result =>   {
    const query = getQuery(SMA_PARTY_MST);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a Party Mst filtered from id from the database
PartyMst.findById = (id, result) => {
    const query = getByIdQuery(SMA_PARTY_MST, id);
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

        result(rowNotFoundResult(PARTY_MST));
    });
};

// Update a Party Mst filtered from id from the database
PartyMst.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_PARTY_MST, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a Party Mst into the database
PartyMst.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_PARTY_MST, requestBody);
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

module.exports = PartyMst;