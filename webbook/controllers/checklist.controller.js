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
    let insertQuery = 'INSERT INTO ?? VALUES (?,?,?,?,?,?,?,?,?,?,?)';
    let query = mysql.format(insertQuery,["checklist",data.id_occurrence,data.idq1,data.question_1,data.idq2,data.question_2,data.idq3,data.question_3,data.idq4,data.question_4,data.idq5,data.question_5]);
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
    let selectQuery = 'SELECT (id_occurrence, idq1, question_1, idq2, question_2, idq3, question_3, idq4, question_4, idq5, question_5) FROM ?? WHERE ?? = ?';    
    let query = mysql.format(selectQuery,["checklist","id_occurrence", id]);
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
    let selectQuery = 'SELECT (id_occurrence, idq1, question_1, idq2, question_2, idq3, question_3, idq4, question_4, idq5, question_5) FROM ??';
    let query = mysql.format(selectQuery,["checklist"]);
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
    let query = mysql.format(deleteQuery, ["checklist", "id_occurrence", id]);
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
    let query = mysql.format(updateQuery,["checklist",data.alterar,data.value,"id_occurrence",data.id]);
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


//Exports
exports.addRowQueryList = addRow;
exports.updatedQueryList = updateRow;
