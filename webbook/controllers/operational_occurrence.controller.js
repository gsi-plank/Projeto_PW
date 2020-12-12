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
    let sql = 'INSERT INTO operational_occurrence (statute, points, arrival, departure, presence, id_operational, id_occurrence) VALUES (?,?,?,?,?,?,?)';
    global.connection.query (sql, [
        req.body.statute,
        req.body.points,
        req.body.arrival,
        req.body.departure,
        req.body.presence,
        req.body.id_operational,
        req.body.id_occurrence
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readAll(req, res) {
    let sql = 'SELECT (statute, points, arrival, departure, presence, id_operational, id_occurrence) FROM operational_occurrence ';
    global.connection.query (sql, function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        return res.json(results);
    });
}
function readIdOccur(req, res) {
    let sql = 'SELECT (statute, points, arrival, departure, presence, id_operational, id_occurrence) FROM operational_occurrence WHERE id_occurrence = ?';    
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
    let sql = 'SELECT (statute, points, arrival, departure, presence, id_operational, id_occurrence) FROM operational_occurrence WHERE id_operational = ?';    
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
    let sql = "DELETE from operational_occurrence where id_operational = ? and id_occurrence = ?";
    global.connection.query(sql, [
        req.params.id_operational,
        req.params.id_occurrence
        ], function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE operational_occurrence SET statute=?, points=?, arrival=?, departure=?, presence=? WHERE id_operational= ? and id_occurrence= ?";
    //(statute, points, arrival, departure, presence, id_operational, id_occurrence)
    global.connection.query(sql, [
        req.body.statute,
        req.body.points,
        req.body.arrival,
        req.body.departure,
        req.body.presence,
        req.params.id_operational,
        req.params.id_occurrence
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

module.exports = {
    list: readAll,
    readOccur: readIdOccur,
    readInd: readIdOp,
    create: addRow,
    update: updateRow,
    delete: deleteRow
};