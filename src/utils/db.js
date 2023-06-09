// Returns the query to get all the rows in a table
function getQuery(table) {
    return `SELECT * FROM ${table}`;
}

// Returns the query to get a row with a given id in a table
function getByIdQuery(table, id) {
    console.log(typeof id)
    return `SELECT * FROM ${table} WHERE id = ${id}`;
}

// Returns the query to update a row with a given id in a table
function putByIdQuery(table, requestBody)    {
    let setString = "";
    for (const [key, value] of Object.entries(requestBody)) {
        if (typeof value === "string") {
            setString += `${key}="${value}",`;
        } else {
            setString += `${key}=${value},`;
        }
    }
    setString = setString.slice(0, -1);

    return `UPDATE ${table} SET ${setString} WHERE id = ${requestBody.id}`;
}

// Returns the query to insert a row in a table
function postByIdQuery(table, requestBody) {
    let columns = "";
    let values = "";

    for (const [key, value] of Object.entries(requestBody)) {
        columns += `${key},`;
        if (typeof value === "string") {
            values += `"${value}",`;
        } else {
            values += `${value},`;
        }
    }
    columns = columns.slice(0, -1);
    values = values.slice(0, -1);

    return `INSERT INTO ${table} (${columns}) VALUES (${values})`;
}

// Returns the query to delete a row in a table
function deleteByIdQuery(table, requestBody) {

    return `DELETE FROM ${table} WHERE ${Object.keys(requestBody)[0]}=${requestBody[Object.keys(requestBody)[0]]};`
}

module.exports = {
    getQuery,
    getByIdQuery,
    putByIdQuery,
    postByIdQuery,
    deleteByIdQuery
}