const Validator = require('validatorjs');

// Validate Designation Object
function validateDesignation(designation) {
    let rules = {
        id: 'required',
        designation: 'required|string',
        travel_per_diem: 'required',
    };
    
    try {
        const validation = new Validator(designation, rules);
      
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
    validateDesignation
}