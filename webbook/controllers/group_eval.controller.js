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
    let query = mysql.format(insertQuery,["group_evaluation",data.id_group,data.id_occurrence,data.id_auditor, data.score, data.invoices]);
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
function readIdGroup(id) {
    let selectQuery = 'SELECT (id_group, id_occurrence, id_auditor, score, invoices) FROM ?? WHERE ?? = ?';    
    let query = mysql.format(selectQuery,["group_evaluation","id_group", id]);
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
    let selectQuery = 'SELECT (id_group, id_occurrence, id_auditor, score, invoices) FROM ?? ';
    let query = mysql.format(selectQuery,["group_evaluation"]);
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

function readIdOccur(id_occur) {
    let selectQuery = 'SELECT (id_group, id_occurrence, id_auditor, score, invoices) FROM ?? WHERE ?? = ?';    
    let query = mysql.format(selectQuery,["group_evaluation","id_occurrence", id_occur]);
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

function readIdAudit(id_audit) {
    let selectQuery = 'SELECT (id_group, id_occurrence, id_auditor, score, invoices) FROM ?? WHERE ?? = ?';    
    let query = mysql.format(selectQuery,["group_evaluation","id_auditor", id_audit]);
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
    let query = mysql.format(deleteQuery, ["group_evaluation", "id_group", id]);
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
    let query = mysql.format(updateQuery,["group_evaluation",data.alterar,data.value,"id_group",data.id]);
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