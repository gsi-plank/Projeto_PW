const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host            : 'remotemysql.com',
    user            : 'SKMj4aTpc9',
    password        : 'djKHE1y1Pg',
    database        : 'SKMj4aTpc9',
    debug           :  false
});

// update rows

function updateRow(data) {
    let updateQuery = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    let query = mysql.format(updateQuery,["todo","notes",data.value,"user",data.user]);
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

// timeout just to avoid firing query before connection happens

setTimeout(() => {
    // call the function
    // update row
    updateRow({
        "user": "Shahid",
        "value": "Just updating a note"
    });
},5000);