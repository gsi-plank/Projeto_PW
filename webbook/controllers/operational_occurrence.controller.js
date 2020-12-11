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

function addRow(data) {
    let insertQuery = 'INSERT INTO ?? VALUES (?,?,?,?,?,?,?)';
    let query = mysql.format(insertQuery,["operational_occurrence",data.statute,data.points,data.arrival,data.departure,data.presence,data.id_operational,data.id_occurrence]);
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response.insertId);
    });
}


//SELECTS
function readAll() {
    let selectQuery = 'SELECT (statute, points, arrival, departure, presence, id_operational, id_occurrence) FROM ?? ';
    let query = mysql.format(selectQuery,["auditor"]);
    // query = SELECT * FROM `todo` where `user` = 'shahid'
    pool.query(query,(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        console.log(data);
    });
}
function readIdOccur(id) {
    let selectQuery = 'SELECT (statute, points, arrival, departure, presence, id_operational, id_occurrence) FROM ?? WHERE ?? = ?';    
    let query = mysql.format(selectQuery,["operational_occurrence","id_occurrence", id]);
    // query = SELECT * FROM `todo` where `user` = 'shahid'
    pool.query(query,(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        console.log(data);
    });
}

function readIdOp(id_op) {
    let selectQuery = 'SELECT (statute, points, arrival, departure, presence, id_operational, id_occurrence) FROM ?? WHERE ?? = ?';    
    let query = mysql.format(selectQuery,["operational_occurrence","id_operational", id_op]);
    // query = SELECT * FROM `todo` where `user` = 'shahid'
    pool.query(query,(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        console.log(data);
    });
}


// DELETE

function deleteRow(data) {
    let deleteQuery = "DELETE from ?? where ?? = ? and ? = ?";
    let query = mysql.format(deleteQuery, ["operational_occurrence", "id_occurrence",data.id_occur,"id_operational",data.id_op]);
    // query = DELETE from `todo` where `user`='shahid';
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows deleted
        console.log(response.affectedRows);
    });
}


// UPDATES

function updateRow(data) {
    let updateQuery = "UPDATE ?? SET ?? = ? WHERE ?? = ? and ? = ?";
    let query = mysql.format(updateQuery,["operational_occurrence",data.alterar,data.value,"id_occurrence",data.id_occur,"id_operational",data.id_op]);
    // query = UPDATE `todo` SET `notes`='Hello' WHERE `name`='shahid'
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows updated
        console.log(response.affectedRows);
    });
}