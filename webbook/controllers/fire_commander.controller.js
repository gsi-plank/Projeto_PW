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
    let sql = 'INSERT INTO fire_commander (id_operational, name, age, cc, date_birth, phone_nr, id_login) VALUES (?,?,?,?,?,?,?)';
    global.connection.query (sql, [
        req.body.id_operational,
        req.body.name,
        req.body.age,
        req.body.cc,
        req.body.date_birth,
        req.body.phone_nr,
        req.body.id_login,
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readID(req, res) {
    let sql = 'SELECT (id_operational, name, age, cc, date_birth, phone_nr) FROM fire_commander WHERE id_operational = ?';    
    global.connection.query (sql, [
        req.params.id_operational,
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (id_operational, name, age, cc, date_birth, phone_nr) FROM fire_commander ';
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
    let sql = "DELETE from fire_commander where id_operational= ?";
    global.connection.query(sql, req.params.id_operational, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE fire_commander SET name=?, age=?, cc=?, date_birth=?, phone_nr=? WHERE id_operational= ?";
    //(id_operational, name, age, cc, date_birth, phone_nr)
    global.connection.query(sql, [
        req.body.name,
        req.body.age,
        req.body.cc,
        req.body.date_birth,
        req.body.phone_nr,
        req.params.id_operational
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