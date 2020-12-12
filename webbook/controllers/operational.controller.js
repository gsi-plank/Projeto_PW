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
    let sql = 'INSERT INTO operational (id_operational, name, birth_date, address, entry_date, cc, phone_number, pay_per_hour, operational_type, speciality, id_login) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)';
    global.connection.query (sql, [
        req.body.id_operational,
        req.body.name,
        req.body.birth_date,
        req.body.address,
        req.body.entry_date,
        req.body.cc,
        req.body.phone_number,
        req.body.pay_per_hour,
        req.body.operational_type,
        req.body.speciality,
        req.body.id_login
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readID(req, res) {
    let sql = 'SELECT (id_operational, name, birth_date, address, entry_date, cc, phone_number, pay_per_hour, operational_type, speciality, id_login) FROM operational WHERE id_operational = ?';    
    global.connection.query (sql, [
        req.params.id_operational
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (id_operational, name, birth_date, address, entry_date, cc, phone_number, pay_per_hour, operational_type, speciality, id_login)) FROM operational';
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
    let sql = "DELETE from operational where id_operational = ?";
    global.connection.query(sql, [
        req.params.id_operational
        ], function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE operational SET name=?, birth_date=?, address=?, entry_date=?, cc=?, phone_number=?, pay_per_hour=?, operational_type=?, speciality=? WHERE id_operational=?";
    //(id_operational, name, birth_date, address, entry_date, cc, phone_number, pay_per_hour, operational_type, speciality, id_login)
    global.connection.query(sql, [
        req.body.name,
        req.body.birth_date,
        req.body.address,
        req.body.entry_date,
        req.body.cc,
        req.body.phone_number,
        req.body.pay_per_hour,
        req.body.operational_type,
        req.body.speciality,
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