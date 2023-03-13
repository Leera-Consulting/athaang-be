const Validator = require('validatorjs');

// Validate Document Type Object
function validateDocumentType(documentType) {
    let rules = {
        id: 'required',
        document: 'required|string',
        status: 'required',
    };
    
    try {
        const validation = new Validator(documentType, rules);
      
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
    validateDocumentType
}