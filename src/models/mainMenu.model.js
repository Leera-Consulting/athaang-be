const sql = require('./db.js');

// constructor
const MainMenu = function(mainMenu) {
    this.id = mainMenu.id;
    this.menu_name = mainMenu.menu_name;
    this.order_no = mainMenu.order_no;
    this.menu_icon = mainMenu.menu_icon;
    this.status = mainMenu.status;
    this.supplier_menu = mainMenu.supplier_menu;
}

MainMenu.getAll = result =>   {
    const query = "SELECT * from sma_main_menu";
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

MainMenu.findById = (id, result) => {
    const query = `SELECT * from sma_main_menu WHERE id = ${id}`;
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

        result({ kind: "not_found" }, null);
    });
};

module.exports = MainMenu;