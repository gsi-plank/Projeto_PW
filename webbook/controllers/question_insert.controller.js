const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host        : 'remotemysql.com',
    user        : 'SKMj4aTpc9',
    password    : 'djKHE1y1Pg',
    database    : 'SKMj4aTpc9',
    debug       :  false
});

// add rows in the table
function addRow(data) {
    let insertQuery = 'INSERT INTO ?? VALUES (?,?,?)';
    let query = mysql.format(insertQuery,["question",data.id_question,data.occurrence_type,data.question]);
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows added
        console.log(response.insertId);
    });
}

// timeout just to avoid firing query before connection happens

setTimeout(() => {
    // call the function
    addRow({
        "id_question": '0000004',
        "occurrence_type": "incêndio",
        "question": "Testemunhas entrevistadas"
    });
},5000);