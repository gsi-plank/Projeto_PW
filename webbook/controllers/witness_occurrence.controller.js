const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host        : 'remotemysql.com',
    user        : 'SKMj4aTpc9',
    password    : 'djKHE1y1Pg',
    database    : 'SKMj4aTpc9',
    debug       :  false
});


// INSERTS

function addRow(req, res) {
    let sql = 'INSERT INTO witness_occurrence (id_witness, id_occurrence, testimony, date, group_nr, justification) VALUES (?,?,?,?,?,?)';
    global.connection.query (sql, [
        req.body.id_witness,
        req.body.id_occurrence,
        req.body.testimony,
        req.body.date,
        req.body.group_nr,
        req.body.justification
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readID(req, res) {
    let sql = 'SELECT (id_witness, id_occurrence, testimony, date, group_nr, justification) FROM witness_occurrence WHERE id_witness= ?';    
    global.connection.query (sql, [
        req.params.id_witness
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (id_witness, id_occurrence, testimony, date, group_nr, justification) FROM witness_occurrence ';
    global.connection.query (sql, function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        return res.json(results);
    });
}

function readIdOccur(req, res) {
    let sql = 'SELECT (id_witness, id_occurrence, testimony, date, group_nr, justification) FROM witness_occurrence WHERE id_occurrence = ?';    
    global.connection.query (sql, [
        req.params.id_occurrence
        ], function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        if (results.length == 0) return res.status(404).end();
        return res.json(results);
    });
}


// DELETE

function deleteRow(req, res) {
    let sql = "DELETE from witness_occurrence where id_witness=?";
    global.connection.query(sql, [
        req.params.id_witness
        ], function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE witness_occurrence SET testimony=?, date=?, group_nr=?, justification=? WHERE id_witness=?";
    //(id_witness, id_occurrence, testimony, date, group_nr, justification)
    global.connection.query(sql, [
        req.body.testimony,
        req.body.date,
        req.body.group_nr,
        req.body.justification,
        req.params.id_witness
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

module.exports = {
    list: readAll,
    read: readID,
    create: addRow,
    update: updateRow,
    delete: deleteRow
};