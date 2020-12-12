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
    let sql = 'INSERT INTO login (id_login, email, password, profile) VALUES (?,?,?,?)';
    global.connection.query (sql, [
        req.body.id_login,
        req.body.email,
        req.body.password,
        req.body.profile
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readID(req, res) {
    let sql = 'SELECT (id_login, email) FROM login WHERE id_login = ?';    
    global.connection.query (sql, [
        req.params.id_login
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (id_login, email) FROM login';
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
    let sql = "DELETE from login where id_login=?";
    global.connection.query(sql, [
        req.params.id_login
        ], function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE login SET email=?, password=? WHERE id_login=?";
    global.connection.query(sql, [
        req.body.email,
        req.body.password,
        req.params.id_login
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