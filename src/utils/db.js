// Returns the query to get all the rows in a table
function getQuery(table) {
    return `SELECT * FROM ${table}`;
}

// Returns the query to get a row with a given id in a table
function getByIdQuery(table, id) {
    return `SELECT * FROM ${table} WHERE id = ${id}`;
}

// Returns the db result when a given row does not exist
function rowNotFoundResult(table)   {
    const messageObj = {
        message: `The ${table} you're trying to search does not exist`,
    };
    return messageObj;
}

module.exports = {
    getQuery,
    getByIdQuery,
    rowNotFoundResult
}