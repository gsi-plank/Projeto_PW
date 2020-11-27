const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'SKMj4aTpc9',
  password: 'djKHE1y1Pg',
  database: 'SKMj4aTpc9'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Server!');
});