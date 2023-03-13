const Validator = require('validatorjs');

// Validate Menu Object
function validateMenu(menu) {
    let rules = {
        id: 'required',
        menu_id: 'required',
        menu_name: 'required|string',
        sub_menu_name: 'required|string',
        source: 'required|string',
        target: 'required|string',
        status: 'required',
        order_no: 'required',
        menu_icon: 'required|string',
        help_link: 'required|regex:(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})',
        supplier_menu: 'required',
    };
    
    try {
        const validation = new Validator(menu, rules);
      
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
    validateMenu
}