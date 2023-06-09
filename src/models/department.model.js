const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_DEPARTMENT, DEPARTMENT } = require("../constants/tables");

// Department constructor
const Department = function(department) {
    this.id = department.id;
    this.code = department.code;
    this.name = department.name;
    this.dept_code = department.dept_code;
}

// Result all sma_department from the database
Department.getAll = result =>   {
    const query = getQuery(SMA_DEPARTMENT);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_department filtered from id from the database
Department.findById = (id, result) => {
    const query = getByIdQuery(SMA_DEPARTMENT, id);
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
  
        result(rowNotFoundResult(DEPARTMENT));
    });
};

// Update a sma_department filtered from id from the database
Department.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_DEPARTMENT, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a department into the database
Department.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_DEPARTMENT, requestBody);
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
Department.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_DEPARTMENT, requestBody);
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

module.exports = Department;