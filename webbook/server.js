const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.listen(port);
console.log('Server started! At http://localhost:' + port);


//O sitema vai estar a espera de tres parametros
app.get('/api/users', function(req, res) {
    const user_id = req.param('id');
    const token = req.param('token');
    const geo = req.param('geo');
    res.send(user_id + ' ' + token + ' ' + geo);
});

//adicionar o variavel global
const bodyParser = require('body-parse');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Pedido post
// http://localhost:8080/api/users 
app.post('/api/users', function (req, res) {
    const user_id = req.body.id;
    const token = req.body.token;
    const geo = req.body.geo;
    res.send(user_id + ' ' + token + ' ' + geo);
    
})