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
    let sql = 'INSERT INTO auditor (id_auditor, name, age, cc, date_birth, phone_nr, id_login) VALUES (?,?,?,?,?,?,?)';
    global.connection.query (sql, [
        req.body.id_auditor,
        req.body.name,
        req.body.age,
        req.body.cc,
        req.body.date_birth,
        req.body.phone_nr,
        req.body.id_login
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readID(req, res) {
    let sql = 'SELECT (id_auditor, name, age, cc, date_birth, phone_nr) FROM auditor WHERE id_auditor = ?';    
    global.connection.query (sql, [
        req.params.id_auditor,
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (id_auditor, name, age, cc, date_birth, phone_nr) FROM auditor';
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
    let sql = "DELETE from auditor where id_auditor = ?";
    global.connection.query(sql, req.params.id_auditor, function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    //id_auditor, name, age, cc, date_birth, phone_nr, id_login
    let sql = "UPDATE auditor SET name=?, cc=?, phone_nr=? WHERE id_auditor=?";
    global.connection.query(sql, [
        req.body.name,
        req.body.cc,
        req.body.phone_nr,
        req.params.id_auditor
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