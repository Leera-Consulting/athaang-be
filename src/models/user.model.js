const { getQuery, getByIdQuery } = require("../utils/db.js");
const sql = require("./db.js");

// constructor
const User = function(user) {
  this.id = user.id;
  this.last_ip_address = user.last_ip_address;
  this.ip_address = user.ip_address;
  this.username = user.username;
  this.userid = user.userid;
  this.password = user.password;
  this.roll_no = user.roll_no;
  this.salt = user.salt;
  this.email = user.email;
  this.mac_address = user.mac_address;
  this.mobile_no = user.mobile_no;
  this.pan_no = user.pan_no;
  this.user_category = user.user_category;
  this.role = user.role;
  this.accountant_role = user.accountant_role;
  this.primary_role = user.primary_role;
  this.department = user.department;
  this.designation = user.designation;
  this.location = user.location;
  this.level_id = user.level_id;
  this.activation_code = user.activation_code;
  this.forgotten_password_code = user.forgotten_password_code;
  this.forgotten_password_time = user.forgotten_password_time;
  this.remember_code = user.remember_code;
  this.created_on = user.created_on;
  this.last_login = user.last_login;
  this.active = user.active;
  this.first_name = user.first_name;
  this.last_name = user.last_name;
  this.company = user.company;
  this.company_work = user.company_work;
  this.phone = user.phone;
  this.avatar = user.avatar;
  this.gender = user.gender;
  this.group_id = user.group_id;
  this.warehouse_id = user.warehouse_id;
  this.biller_id = user.biller_id;
  this.company_id = user.company_id;
  this.level_1 = user.level_1;
  this.level_2 = user.level_2;
  this.level_3 = user.level_3;
  this.regular_exp_approver = user.regular_exp_approver;
  this.mis_alert_email = user.mis_alert_email;
  this.show_cost = user.show_cost;
  this.show_price = user.show_price;
  this.award_points = user.award_points;
  this.view_right = user.view_right;
  this.edit_right = user.edit_right;
  this.allow_discount = user.allow_discount;
  this.password_expired_date = user.password_expired_date;
  this.password_expired_days = user.password_expired_days;
  this.bank_name = user.bank_name;
  this.bank_type = user.bank_type;
  this.bank_branch = user.bank_branch;
  this.bank_ac_no = user.bank_ac_no;
  this.bank_ifsc = user.bank_ifsc;
  this.user_group = user.user_group;
  this.otp_send = user.otp_send;
  this.google_auth_code = user.google_auth_code;
  this.ps = user.ps;
};

User.getAll = result => {
    const query = getQuery("sma_user");
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      result(null, res);
    });
};

User.findById = (id, result) => {
  const query = getByIdQuery("sma_user", id);
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

    // not found User with the id
    result({ kind: "not_found" }, null);
  });
};

module.exports = User;