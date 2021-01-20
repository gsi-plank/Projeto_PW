const express = require('express');

//carregar bibliotecas globais
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const expressValidator = require('express-validator');

//iniciar a aplicação
var server = express();
server.use(express.static("../Frontend/"));
server.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
server.use(expressSanitizer());
server.use(expressValidator());
server.listen(8080, function(err) {
    if (!err) {
        console.log('Your app is listening on port 8080');
    }
    else { console.log(err); }
});

//forçar utilização das bibliotecas
server.use(cors());
server.use(cookieParser());
module.exports = server;

require('./routes/occurrence.route');
require('./routes/user.route');