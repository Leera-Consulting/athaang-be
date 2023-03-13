const { getQuery, getByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_DESIGNATION, DESIGNATION } = require("../constants/tables");

// Designation constructor
const Designation = function(designation) {
    this.id = designation.id;
    this.designation = designation.designation;
    this.travel_per_diem = designation.travel_per_diem;
}

// Result all sma_designation from the database
Designation.getAll = result =>   {
    const query = getQuery(SMA_DESIGNATION);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_designation filtered from id from the database
Designation.findById = (id, result) => {
    const query = getByIdQuery(SMA_DESIGNATION, id);
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
  
        result(rowNotFoundResult(DESIGNATION));
    });
};

module.exports = Designation;