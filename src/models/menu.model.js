const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_MENU, MENU } = require("../constants/tables")

// Menu constructor
const Menu = function(menu) {
    this.id = menu.id;
    this.menu_id = menu.menu_id;
    this.menu_name = menu.name;
    this.sub_menu_name = menu.sub_menu_name;
    this.source = menu.source;
    this.target = menu.target;
    this.status = menu.status;
    this.order_no = menu.order_no;
    this.menu_icon = menu.menu_icon;
    this.help_link = menu.help_link;
    this.supplier_menu = menu.supplier_menu;
}

// Result all sma_menu from the database
Menu.getAll = result =>   {
    const query = getQuery(SMA_MENU);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_menu filtered from id from the database
Menu.findById = (id, result) => {
    const query = getByIdQuery(SMA_MENU, id);
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

        result(rowNotFoundResult(MENU));
    });
};

// Update a menu filtered from id from the database
Menu.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_MENU, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a menu into the database
Menu.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_MENU, requestBody);
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

module.exports = Menu;