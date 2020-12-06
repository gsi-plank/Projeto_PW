const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host            : 'remotemysql.com',
    user            : 'SKMj4aTpc9',
    password        : 'djKHE1y1Pg',
    database        : 'SKMj4aTpc9',
    debug           :  false
});

// query rows in the table

function queryRow(id) {
    let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';    
    let query = mysql.format(selectQuery,["question","id_question", id]);
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

// timeout just to avoid firing query before connection happens

setTimeout(() => {
    // call the function
    // select rows
    queryRow('0000005');
},5000);