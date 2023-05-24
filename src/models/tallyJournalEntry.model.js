const { getQuery, getByIdQuery, putByIdQuery, postByIdQuery } = require('../utils/db');
const { rowNotFoundResult } = require('../utils/error');
const sql = require('./db.js');
const { TALLY_JOURNAL_ENTRY } = require('../constants/tables');

// TallyJournalEntry constructor
const TallyJournalEntry = function(tallyJournalEntry) {
    this.id = tallyJournalEntry.id;
}

// Result all TALLY_JOURNAL_ENTRY from the database
TallyJournalEntry.getAll = result =>   {
    const query = getQuery(TALLY_JOURNAL_ENTRY);
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Result a TALLY_JOURNAL_ENTRY filtered from id from the database
TallyJournalEntry.findById = (id, result) => {
    const query = getByIdQuery(TALLY_JOURNAL_ENTRY, id);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        if (res.length) {
            result(null, res[0]);
            return;
        }

        result(rowNotFoundResult(TALLY_JOURNAL_ENTRY));
    });
};

// Result all TALLY_JOURNAL_ENTRY from the database
TallyJournalEntry.findForTravelExpense = (te_id, result) =>   {
    const query = `SELECT * FROM ${TALLY_JOURNAL_ENTRY} WHERE doc_no = ${te_id} AND doc_type = 'TE' ORDER BY record_id`;
    sql.query(query, (err, res) => {
        if (err)    {
            result(null, err);
            return;
        }

        result(null, res);
    });
};

// Update a TALLY_JOURNAL_ENTRY filtered from id from the database
TallyJournalEntry.updateById = (requestBody, result) => {
    const query = putByIdQuery(TALLY_JOURNAL_ENTRY, requestBody);
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

// Insert a TALLY_JOURNAL_ENTRY into the database
TallyJournalEntry.insert = (requestBody, result) => {
    const query = postByIdQuery(TALLY_JOURNAL_ENTRY, requestBody);
    console.log(query)
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
  
        result(null, res);
    });
}

module.exports = TallyJournalEntry;