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
    let sql = 'INSERT INTO material_occurrence (id_material, material_name, id_occurrence) VALUES (?,?,?)';
    global.connection.query (sql, [
        req.body.id_material,
        req.body.material_name,
        req.body.id_occurrence
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readIdMat(req, res) {
    let sql = 'SELECT (id_material, material_name, id_occurrence) FROM material_occurrence WHERE id_material=?';    
    global.connection.query (sql, [
        req.params.id_material
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (id_material, material_name, id_occurrence) FROM material_occurrence';
    global.connection.query (sql, function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        return res.json(results);
    });
}

function readIdOccur(req, res) {
    let sql = 'SELECT (id_material, material_name, id_occurrence) FROM material_occurrence WHERE id_occurrence=?';    
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


// DELETE

function deleteRow(req, res) {
    let sql = "DELETE from material_occurrence where id_material=?";
    global.connection.query(sql, [
        req.params.id_material
        ], function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE material_occurrence SET material_name=? WHERE id_material=?";
    global.connection.query(sql, [
        req.body.material_name,
        req.params.id_material
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

module.exports = {
    list: readAll,
    read: readIdOccur,
    create: addRow,
    update: updateRow,
    delete: deleteRow
};