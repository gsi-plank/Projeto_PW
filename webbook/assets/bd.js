const express = require("express");
const app = express();
const mysql = require('mysql');

const pool = mysql.createPool({
  host      : 'remotemysql.com',
  user      : 'SKMj4aTpc9',
  password  : 'djKHE1y1Pg',
  database  : 'SKMj4aTpc9'
});


app.get("/",(req,res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err;
        console.log('connected as id ' + connection.threadId);
        connection.query('SELECT * from question LIMIT 20', (err, rows) => {
            connection.release(); // return the connection to pool
            if(err) throw err;
            console.log('The data from the question table is: \n', rows);
        });
    });
});

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log('Server is running at port ' + port);
});