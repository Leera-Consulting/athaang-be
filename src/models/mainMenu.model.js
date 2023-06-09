const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery, deleteByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_MAIN_MENU, MAIN_MENU } = require("../constants/tables");

// Main menu constructor
const MainMenu = function(mainMenu) {
    this.id = mainMenu.id;
    this.menu_name = mainMenu.menu_name;
    this.order_no = mainMenu.order_no;
    this.menu_icon = mainMenu.menu_icon;
    this.status = mainMenu.status;
    this.supplier_menu = mainMenu.supplier_menu;
}

// Result all sma_main_menu from the database
MainMenu.getAll = result =>   {
    const query = getQuery(SMA_MAIN_MENU);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a sma_main_menu filtered from id from the database
MainMenu.findById = (id, result) => {
    const query = getByIdQuery(SMA_MAIN_MENU, id);
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

        result(rowNotFoundResult(MAIN_MENU));
    });
};

// Update a main menu filtered from id from the database
MainMenu.updateById = (requestBody, result) => {
    const query = putByIdQuery(SMA_MAIN_MENU, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a main menu into the database
MainMenu.insert = (requestBody, result) => {
    const query = postByIdQuery(SMA_MAIN_MENU, requestBody);
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
MainMenu.delete = (requestBody, result) => {
    const query = deleteByIdQuery(SMA_MAIN_MENU, requestBody);
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

module.exports = MainMenu;