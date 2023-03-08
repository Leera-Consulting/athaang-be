const { getQuery, getByIdQuery, rowNotFoundResult } = require('../utils/db.js');
const sql = require('./db.js');

// Menu constructor
const Menu = function(menu) {
    this.id = menu.id;
    this.menu_id = menu.id;
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
    const query = getQuery("sma_menu");
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
    const query = getByIdQuery("sma_menu", id);
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

        result(rowNotFoundResult("Menu"));
    });
};

module.exports = Menu;