const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_CATEGORIES, CATEGORIES } = require('../constants/tables');

// Category constructor
const Category = function(category) {
    this.id = category.id;
}

// Result all sma_categories from the database
Category.getAll = result =>   {
    const query = getQuery(SMA_CATEGORIES);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_categories filtered from id from the database
Category.findById = (id, result) => {
    const query = getByIdQuery(SMA_CATEGORIES, id);
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

        result(rowNotFoundResult(CATEGORIES));
    });
};

// Update a Category filtered from id from the database
Category.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_CATEGORIES, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a Category into the database
Category.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_CATEGORIES, requestBody);
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
Category.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_CATEGORIES, requestBody);
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

module.exports = Category;