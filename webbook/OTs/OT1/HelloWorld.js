// Carrega a biblioteca HTTP do Node.js
var http = require('http');

const port = process.env.port || 8080;

// Cria uma instância do servidor web
var server = http.createServer(function (request, response) {
    // Define os parâmetros do cabeçalho da resposta HTTP
    response.writeHead(200, {'Content-Type': 'text/html'});
        // request.url -> retorna uma string sobre o que foi digitado no endereço URL
        if(request.url == "/"){
            response.write("<html><body><h1>Hello Node.js!</h1>");
            response.write("<a href='/bemvindo'>Bem-vindo</a>");
            response.write("</body></html>");
        }else if(request.url == "/bemvindo"){
            response.write("<html><body><h1>Bem-vindo ao Node.js!</h1>");
            response.write("<a href='/'>Node.js</a>");
            response.write("</body></html>");
        }else{
            response.write("<html><body><h1>PAGE NOT FOUND!</h1></body></html>");
        }
    response.end(); // envia uma resposta para o cliente
});

// Coloca o servidor à espera de pedidos através da porta 3000 na máquina local
server.listen(port);
// Imprime mensagem no terminal do servidor
console.log('Servidor Node.js em execucao');