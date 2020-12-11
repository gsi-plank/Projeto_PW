const cookiePaser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const app = require('../server');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());





