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
    let sql = 'INSERT INTO question (id_question, occurrence_type, question) VALUES (?,?,?)';
    global.connection.query (sql, [
        req.body.id_question,
        req.body.occurrence_type,
        req.body.question
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readID(req, res) {
    let sql= 'SELECT (id_question, occurrence_type, question) FROM question WHERE id_question = ?';    
    global.connection.query (sql, [
        req.params.id_question
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(res, res) {
    let sql = 'SELECT (id_question, occurrence_type, question) FROM question ';
    global.connection.query (sql, function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        return res.json(results);
    });
}

function readType(req, res) {
    let sql = 'SELECT (id_question, occurrence_type, question) FROM question WHERE occurrence_type = ?';    
    global.connection.query (sql, [
        req.params.occurrence_type
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
    let sql = "DELETE from question where id_question = ?";
    global.connection.query(sql, [
        req.params.id_question
        ], function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE question SET occurrence_type=?, question=? WHERE id_question=?";
    global.connection.query(sql, [
        req.body.occurrence_type,
        req.body.question,
        req.params.id_question
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

module.exports = {
    list: readAll,
    read: readID,
    readType: readType(),
    create: addRow,
    update: updateRow,
    delete: deleteRow
};