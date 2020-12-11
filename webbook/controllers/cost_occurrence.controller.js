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
    let insertQuery = 'INSERT INTO ?? VALUES (?,?,?,?,?)';
    let query = mysql.format(insertQuery,["cost_occurrence",data.id_occurrence,data.duration,data.num_of_operationals,data.distance,data.cost]);
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
function readID(id) {
    let selectQuery = 'SELECT (id_occurrence, duration, num_of_operationals, distance, cost) FROM ?? WHERE ?? = ?';    
    let query = mysql.format(selectQuery,["cost_occurrence","id_occurrence", id]);
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

function readAll() {
    let selectQuery = 'SELECT (id_occurrence, duration, num_of_operationals, distance, cost) FROM ??';
    let query = mysql.format(selectQuery,["cost_occurrence"]);
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

function deleteRow(id) {
    let deleteQuery = "DELETE from ?? where ?? = ?";
    let query = mysql.format(deleteQuery, ["cost_occurrence", "id_occurrence", id]);
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
    let updateQuery = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    let query = mysql.format(updateQuery,["cost_occurrence",data.alterar,data.value,"id_occurrence",data.id]);
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