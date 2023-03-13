const Validator = require('validatorjs');

// Validate Department Object
function validateDepartment(department) {
    let rules = {
        id: 'required',
        code: 'present',
        name: 'required|string',
        dept_code: 'required|string',
    };
    
    try {
        const validation = new Validator(department, rules);
      
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
    validateDepartment
}