const express = require('express');
const port = process.env.PORT || 8080;
const host = process.env.HOST || '3.86.254.40';

//carregar bibliotecas globais
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const expressValidator = require('express-validator');

//iniciar a aplicação
var server = express();
// server.use(express.static("../Frontend/"));
server.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));
server.use(expressSanitizer());
server.use(expressValidator());
server.listen(port, function(err) {
    if (!err) {
        console.log('Your app is listening on ' + host + ' and port ' + port);
    }
    else { console.log(err); }
});

//forçar utilização das bibliotecas
server.use(cors());
server.use(cookieParser());


// server.use(function (req, res, next) {
//     // check if client sent cookie
//     var cookie = req.cookies.cookieName;
//     if (cookie === undefined) {
//         // no: set a new cookie
//         var randomNumber = Math.random().toString();
//         randomNumber = randomNumber.substring(2, randomNumber.length);
//         res.cookie('cookieName', randomNumber, {
//             maxAge: 900000,
//             httpOnly: true,
//             secure: true
//         });
//         console.log('cookie created successfully');
//     } else { // yes, cookie was already present
//         console.log('cookie exists', cookie);
//     }
//     next(); // <-- important!
// });

module.exports = server;

require('./routes/occurrence.route');
require('./routes/user.route');