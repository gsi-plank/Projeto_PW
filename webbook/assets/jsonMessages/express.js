const express = require ("express");
const app = express();
const mysql = require('mysql');
const port = process.env.port || 8080;

const connection = mysql.createConnection ({
    host: 'remotemysql.com',
    user: 'SKMj4aTpc9',
    password: 'djKHE1y1Pg',
    database: 'SKMj4aTpc9'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});

app.get("/", (req, res) => {
    connection.query('SELECT * from users LIMIT 1', (err, rows) => {
        if(err) throw err;
        console.log('The data from users table are; \n', rows);
        connection.end();
    });
});

app.listen(port, () => {
    console.log('Server is running at port' port);
})