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
    let sql = 'INSERT INTO administrador (id_admin, name, age, nationality, cc, date_birth, phone_nr, address) VALUES (?,?,?,?,?,?,?,?,?)';
    global.connection.query (sql, [
        req.body.id_admin,
        req.body.name,
        req.body.age,
        req.body.nationality,
        req.body.cc,
        req.body.date_birth,
        req.body.phone_nr,
        req.body.address,
        req.body.id_login
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS

function readID(req, res) {
    let sql = 'SELECT (id_admin, name, age, nationality, cc, date_birth, phone_nr, address) FROM administrador WHERE id_admin = ?';    
    global.connection.query (sql, [
        req.params.id_admin,
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (id_admin, name, age, nationality, cc, date_birth, phone_nr, address) FROM administrador';
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
    let sql= "DELETE from administrador where id_admin = ?";
    global.connection.query(sql, req.params.id_admin, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE administrador SET name=?, age=?, nationality=?, cc=?, phone_nr=?, address=? WHERE id_admin = ?";
    //(id_admin, name, age, nationality, cc, date_birth, phone_nr, address)
    global.connection.query(sql, [
        req.body.name,
        req.body.age,
        req.body.nationality,
        req.body.cc,
        req.body.phone_nr,
        req.body.address, 
        req.params.id_admin
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
}