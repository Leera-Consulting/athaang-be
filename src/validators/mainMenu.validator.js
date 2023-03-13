const Validator = require('validatorjs');

// Validate Main Menu Object
function validateMainMenu(mainMenu) {
    let rules = {
        id: 'required',
        menu_name: 'required|string',
        order_no: 'required',
        menu_icon: 'required|string',
        status: 'required',
        supplier_menu: 'present',
    };
    
    try {
        const validation = new Validator(mainMenu, rules);
      
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
    validateMainMenu
}