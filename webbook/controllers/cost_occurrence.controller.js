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
    let sql = 'INSERT INTO cost_occurrence (id_occurrence, duration, num_of_operationals, distance, cost) VALUES (?,?,?,?,?)';
    global.connection.query (sql, [
        req.body.id_occurrence,
        req.body.duration,
        req.body.num_of_operationals,
        req.body.distance,
        req.body.cost,
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readID(req, res) {
    let sql = 'SELECT (id_occurrence, duration, num_of_operationals, distance, cost) FROM cost_occurrence WHERE id_occurrence = ?';    
    global.connection.query (sql, [
        req.params.id_occurrence,
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (id_occurrence, duration, num_of_operationals, distance, cost) FROM cost_occurrence';
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
    let sql = "DELETE from cost_occurrence where id_occurrence = ?";
    global.connection.query(sql, req.params.id_occurrence, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE cost_occurrence SET duration=?, num_of_operationals=?, distance=?, cost=? WHERE id_occurrence= ?";
    //(id_occurrence, duration, num_of_operationals, distance, cost)
    global.connection.query(sql, [
        req.body.duration,
        req.body.num_of_operationals,
        req.body.distance,
        req.body.cost,
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