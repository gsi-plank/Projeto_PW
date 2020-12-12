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
    let sql = 'INSERT INTO checklist (id_occurrence, idq1, question_1, idq2, question_2, idq3, question_3, idq4, question_4, idq5, question_5) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
    global.connection.query (sql, [
        req.body.id_occurrence,
        req.body.iq1,
        req.body.question_1,
        req.body.iq2,
        req.body.question_2,
        req.body.iq3,
        req.body.question_3,
        req.body.iq4,
        req.body.question_4,
        req.body.iq5,
        req.body.question_5,
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readID(req, res) {
    let sql = 'SELECT (id_occurrence, idq1, question_1, idq2, question_2, idq3, question_3, idq4, question_4, idq5, question_5) FROM checklist WHERE id_occurrence = ?';    
    global.connection.query (sql, [
        req.params.id_occurrence,
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (id_occurrence, idq1, question_1, idq2, question_2, idq3, question_3, idq4, question_4, idq5, question_5) FROM checklist';
    global.connection.query (sql, function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        return res.json(results);
    });
}


// DELETE

function deleteRow(req, res) {
    let sql = "DELETE from checklist where id_occurrence= ?";
    global.connection.query(sql, req.params.id_occurrence, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE checklist SET question_1=?, question_2=?, question_3=?, question_4=?, question_5=? WHERE id_occurrence= ?";
    global.connection.query(sql, [
        req.body.question_1,
        req.body.question_2,
        req.body.question_3,
        req.body.question_4,
        req.body.question_5,
        req.params.id_occurrence
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