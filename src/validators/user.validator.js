const Validator = require('validatorjs');

// Validate User Object
function validateUser(user) {
    let rules = {
        id: 'required',
        last_ip_address: 'present',
        ip_address: 'object',
        username: 'required',
        userid: 'required',
        password: 'required',
        roll_no: 'required',
        salt: 'present',
        email: 'required',
        mac_address: 'present',
        mobile_no: 'required',
        pan_no: 'present',
        user_category: 'present',
        role: 'required',
        accountant_role: 'present',
        primary_role: 'required',
        department: 'required',
        designation: 'required',
        location: 'present',
        level_id: 'required',
        activation_code: 'present',
        forgotten_password_code: 'present',
        forgotten_password_time: 'present',
        remember_code: 'present',
        created_on: 'required',
        last_login: 'present',
        active: 'required',
        first_name: 'present',
        last_name: 'present',
        company: 'present',
        company_work: 'required',
        phone: 'present',
        avatar: 'present',
        gender: 'present',
        group_id: 'required',
        warehouse_id: 'present',
        biller_id: 'present',
        company_id: 'required',
        level_1: 'present|string',
        level_2: 'present|string',
        level_3: 'present|string',
        regular_exp_approver: 'present|string',
        mis_alert_email: 'present|string',
        show_cost: 'required',
        show_price: 'required',
        award_points: 'required',
        view_right: 'required',
        edit_right: 'required',
        allow_discount: 'required',
        password_expired_date: 'required',
        password_expired_days: 'required',
        bank_name: 'required',
        bank_type: 'required',
        bank_branch: 'required',
        bank_ac_no: 'required',
        bank_ifsc: 'required|string',
        user_group: 'present|string',
        otp_send: 'present|string',
        google_auth_code: 'required',
        ps: 'email',
    };
    
    try {
        const validation = new Validator(user, rules);
      
        if (validation.passes())    {
            return {
                success: true,
                message: "Data is valid"
            }
        } else {
            return {
                success: false,
                message: validation.errors.errors
            }
        }
    } catch(err)    {
        return {
            success: false,
            message: err.message || "Data validation failed"
        }
    }
}

module.exports = {
    validateUser
}