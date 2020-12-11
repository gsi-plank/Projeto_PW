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
    let sql = 'INSERT INTO group_evaluation (id_group, id_occurrence, id_auditor, score, invoices) VALUES (?,?,?,?,?)';
    global.connection.query (sql, [
        req.body.id_group,
        req.body.id_occurrence,
        req.body.id_auditor,
        req.body.score,
        req.body.invoices
        ], function (err, results) {
        if (err) return res.status(500).end();
        res.json(results);
    });
}


//SELECTS
function readIdGroup(req, res) {
    let sql = 'SELECT (id_group, id_occurrence, id_auditor, score, invoices) FROM group_evaluation WHERE id_group = ?';    
    global.connection.query (sql, [
        req.params.id_group,
        ], function (err, results) {
        if (err) return res.status(500).end();
        if (results.length == 0) return res.status(404).end();
        return res.json(results[0]);
    });
}

function readAll(req, res) {
    let sql = 'SELECT (id_group, id_occurrence, id_auditor, score, invoices) FROM group_evaluation ';
    global.connection.query (sql, function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        return res.json(results);
    });
}

function readIdOccur(req, res) {
    let sql = 'SELECT (id_group, id_occurrence, id_auditor, score, invoices) FROM group_evaluation WHERE id_occurrence = ?';    
    global.connection.query (sql, [
        req.params.id_occurrence,
        ], function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        return res.json(results);
    });
}

function readIdAudit(req, res) {
    let sql = 'SELECT (id_group, id_occurrence, id_auditor, score, invoices) FROM group_evaluation WHERE id_auditor= ?';    
    global.connection.query (sql, [
        req.params.id_auditor
        ], function (err, results) {
        if (err) {
            console.log(err);
            return res.status(500).end();
        }
        return res.json(results);
    });
}


// DELETE

function deleteRow(req, res) {
    let sql = "DELETE from group_evaluation where id_group= ?";
    global.connection.query(sql, [
        req.params.id_group
        ], function(err, results){
        if (err) return res.status(500).end();
        res.status(204).end();
    });
}


// UPDATES

function updateRow(req, res) {
    let sql = "UPDATE group_evaluation SET score=?, invoices=? WHERE id_group=?";
    //(id_group, id_occurrence, id_auditor, score, invoices)
    global.connection.query(sql, [
        req.body.score,
        req.body.invoices,
        req.params.id_group
      ], function(err, results) {
            if (err) return res.status(500).end();
            res.json(results);
    });
}

module.exports = {
    list: readAll,
    read: readIdGroup,
    create: addRow,
    update: updateRow,
    delete: deleteRow
};