const express = require('express');
app = express();

//file: routes/main.js
app.get('/', function(req, res, next){});

//variavel global
//file app.js
global.app = express();
//file: router/main.js
global.app.get('/', function(req, res) {});


//Ficheiros estaticos 

app.use(express.static(__dirname + 'nome_diretioria'));
// app.use: //vincula um middleware a aplicacao
// __dirname: //variavel global que contem o nome do diretorio da aplicacoa

// permite entregar imagens ficheiros css e ficheiros javascript a um diretorio chamado assets atraves da rota /public:
app.use('/template', global.express.static('views/template'));


//cria yna rota template/index e todos os ficheiros acedidos nesssa rota utilizam a pasta views, este codigo eeniara um ficheiro estatico (index.html) sempre que a rota principa (templates/index) for acedida
app.get('/templates/index', function (req, res) {
    app.use(express.static('view'));
    res.sendFile(__dirname + '/views/template/' + 'index.html');
});

// a utilizacao dos ficheiros estaticos pode ser global ou apenas local 



