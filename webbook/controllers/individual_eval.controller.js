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
    let sql = 'INSERT INTO individual_evaluation (id_evaluation, id_occurrence, id_operational, score, invoices) VALUES (?,?,?,?,?)';
    global.connection.query (sql, [
        req.body.id_evaluation,
        req.body.id_occurrence,
        req.body.id_operational,
        req.body.score,
        req.body.invoices
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readIdInd(req, res) {
    let sql = 'SELECT (id_evaluation, id_occurrence, id_operational, score, invoices) FROM individual_evaluation WHERE id_evaluation= ?';    
    global.connection.query (sql, [
        req.params.id_evaluation
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (id_evaluation, id_occurrence, id_operational, score, invoices) FROM individual_evaluation ';
    global.connection.query (sql, function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        return res.json(results);
    });
}

function readIdOccur(req, res) {
    let sql = 'SELECT (id_evaluation, id_occurrence, id_operational, score, invoices) FROM individual_evaluation WHERE id_occurrence=?';    
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

function readIdOp(req, res) {
    let sql = 'SELECT (id_evaluation, id_occurrence, id_operational, score, invoices) FROM individual_evaluation WHERE id_operational=?';    
    global.connection.query (sql, [
        req.params.id_operational
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
    let sql = "DELETE from individual_evaluation where id_evaluation=?";
    global.connection.query(sql, [
        req.params.id_evaluation
        ], function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE individual_evaluation SET score=?, invoices=? WHERE id_evaluation=?";
    global.connection.query(sql, [
        req.body.score,
        req.body.invoices,
        req.params.id_evaluation
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

module.exports = {
    list: readAll,
    read: readIdInd,
    create: addRow,
    update: updateRow,
    delete: deleteRow
};