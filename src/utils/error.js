const {
    ER_NO_SUCH_TABLE,
    ER_BAD_FIELD_ERROR,
    ER_TOO_LONG_IDENT,
    ER_DUP_KEYNAME,
    ER_WRONG_FIELD_SPEC,
    ER_EMPTY_QUERY,
    ER_PARSE_ERROR,
    ER_TOO_LONG_KEY,
    ER_KEY_COLUMN_DOES_NOT_EXITS
} = require("../constants/sql");

// Returns the db result when a given row does not exist
function rowNotFoundResult(table)   {
    const messageObj = {
        message: `The ${table} you're trying to search does not exist`,
    };
    return messageObj;
}

// add handler to spit custom error messages on sql exceptions
function handleSqlErrorMessage(err) {
    switch (err.code)   {
        case ER_NO_SUCH_TABLE:
            return "No such table exists";
        case ER_BAD_FIELD_ERROR:
            return "The requested column does not exist";
        case ER_TOO_LONG_IDENT:
            return "The identifier provided is too long";
        case ER_DUP_KEYNAME:
            return "The key with this name already exists";
        case ER_WRONG_FIELD_SPEC:
            return "Incorrect column specifier has been used";
        case ER_EMPTY_QUERY:
            return "No operation was executed";
        case ER_PARSE_ERROR:
            return "Incorrect format of payload was provided";
        case ER_TOO_LONG_KEY:
            return "The provided key length is too long";
        case ER_KEY_COLUMN_DOES_NOT_EXITS:
            return "The requested column does not exist";
        default:
            return err.message;
    }
}

module.exports = {
    rowNotFoundResult,
    handleSqlErrorMessage
}