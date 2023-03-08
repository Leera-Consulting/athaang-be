function getQuery(table) {
    return `SELECT * FROM ${table}`;
}

function getByIdQuery(table, id) {
    return `SELECT * FROM ${table} WHERE id = ${id}`;
}

module.exports = {
    getQuery,
    getByIdQuery
}