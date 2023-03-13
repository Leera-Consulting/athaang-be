const Validator = require('validatorjs');

// Validate Role Object
function validateRole(role) {
    let rules = {
        id: 'required',
        role: 'required|string',
    };
    
    try {
        const validation = new Validator(role, rules);
      
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
    validateRole
}