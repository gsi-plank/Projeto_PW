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
    let sql = 'INSERT INTO occurrence (id_occurrence, local, distance, occurrence_type, status, access_code, arrival, departure, cost, origin, description, id_entity, id_request) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)';
    mysql.connection.query (sql, [
        req.body.id_occurrence,
        req.body.local,
        req.body.distance,
        req.body.occurrence_type,
        req.body.status,
        req.body.access_code,
        req.body.arrival,
        req.body.departure,
        req.body.cost,
        req.body.origin,
        req.body.description,
        req.body.id_entity,
        req.body.id_request
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readID(req, res) {
    const id_occurrence = req.sanitize('id_occurrence').escape();
    let sql = 'SELECT (id_occurrence, local, distance, occurrence_type, status, access_code, arrival, departure, cost, origin, description, id_entity, id_request) FROM occurrence WHERE id_occurrence=?';    
    mysql.connection.query (sql, [
        req.params.id_occurrence
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (id_occurrence, local, distance, occurrence_type, status, access_code, arrival, departure, cost, origin, description, id_entity, id_request) FROM occurrence';
    mysql.con.query (sql, function (err, results, fields) {
        if (!err) {
            if (results.length == 0) {
                res.status(404).send("Data not found");
                } else {
                    res.status(200).send(results);
                }
        } else
            console.log('Error while performing query', err);
    });
}


// DELETE

function deleteRow(req, res) {
    let sql = "DELETE from occurrence where id_occurrence=?";
    global.connection.query(sql, [
        req.params.id_occurrence
        ], function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE occurrence SET local=?, distance=?, occurrence_type=?, status=?, access_code=?, arrival=?, departure=?, cost=?, origin=?, description=? WHERE id_occurrence=?";
    //(id_occurrence, local, distance, occurrence_type, status, access_code, arrival, departure, cost, origin, description, id_entity, id_request)
    global.connection.query(sql, [
        req.body.local,
        req.body.distance,
        req.body.occurrence_type,
        req.body.status,
        req.body.access_code,
        req.body.arrival,
        req.body.departure,
        req.body.cost,
        req.body.origin,
        req.body.description,
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