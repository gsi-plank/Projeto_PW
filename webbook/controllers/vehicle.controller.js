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
    let sql = 'INSERT INTO vehicle (regist, capacity, fuel_average, brand, model, id_admin) VALUES (?,?,?,?,?,?)';
    global.connection.query (sql, [
        req.body.regist,
        req.body.capacity,
        req.body.fuel_average,
        req.body.brand,
        req.body.model,
        req.body.id_admin
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readID(req, res) {
    let sql = 'SELECT (regist, capacity, fuel_average, brand, model, id_admin) FROM vehicle WHERE regist = ?';    
    global.connection.query (sql, [
        req.params.regist
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (regist, capacity, fuel_average, brand, model, id_admin) FROM vehicle';
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
    let sql = "DELETE from vehicle where regist=?";
    global.connection.query(sql, [
        req.params.regist
        ], function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE vehicle SET capacity=?, fuel_average=?, brand=?, model=? WHERE regist=?";
    //(regist, capacity, fuel_average, brand, model, id_admin)
    global.connection.query(sql, [
        req.body.capacity,
        req.body.fuel_average,
        req.body.brand,
        req.body.brand,
        req.body.model,
        req.params.regist
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