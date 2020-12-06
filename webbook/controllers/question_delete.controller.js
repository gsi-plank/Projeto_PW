const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host            : 'remotemysql.com',
    user            : 'SKMj4aTpc9',
    password        : 'djKHE1y1Pg',
    database        : 'SKMj4aTpc9',
    debug           :  false
});

function deleteRow(id) {
    let deleteQuery = "DELETE from ?? where ?? = ?";
    let query = mysql.format(deleteQuery, ["question", "id_question", id]);
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

// timeout just to avoid firing query before connection happens

setTimeout(() => {
    // call the function
    // delete row
    deleteRow('1');
},5000);