const express = require("express");
const app = express();
const mysql = require('mysql');

const pool = mysql.createPool({
  host      : 'remotemysql.com',
  user      : 'SKMj4aTpc9',
  password  : 'djKHE1y1Pg',
  database  : 'SKMj4aTpc9'
});