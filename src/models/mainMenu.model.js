const { getQuery, getByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { SMA_MAIN_MENU } = require("../constants/tables");

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

        result(rowNotFoundResult("Main Menu"));
    });
};

module.exports = MainMenu;