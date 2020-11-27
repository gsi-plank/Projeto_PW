// Carrega a biblioteca HTTP do Node.js
var http = require('http');
var fs = require ('fs');

const port = process.env.port || 8080;

// Cria uma instância do servidor web
var server = http.createServer(function (request, response) {
    // Define os parâmetros do cabeçalho da resposta HTTP
    response.writeHead(200, {'Content-Type': 'text/html'});
        // request.url -> retorna uma string sobre o que foi digitado no endereço URL
        if(request.url == "/"){
            response.write("<html><body><h1>Bem vindo ao Backend!</h1>");
            response.write("<a href='/equipa'>Constituicao da Equipa</a>");
            response.write("<p>");
            response.write("<a href='/frontend'>Templates pfv</a>");
            response.write("</p>");
            response.write("</body></html>");
        }else if(request.url == "/equipa"){
            response.write("<html><body><h1>Bem-vindo a nossa equipa!</h1>");
            response.write("<p>Dong</p><p>Ana Delgado</p><p>Beatriz Marques</p><p>Joao Vieira</p><p>Mariana Rodrigues</p>");
            response.write("</body></html>");
        }else if(request.url == "/frontend"){
            var q = fs.readFileSync('./Projeto_PW/Frontend/login.js',function(err, data) {
                response.writeHead(200, {'Content-Type': 'text/js'});
                if(err) 
                    response.write(err.mensagem); 
                else
                    response.send(data);
                });
            fs.readFileSync('./Projeto_PW/Frontend/login.html', function(err, data) {
                response.writeHead(200, {'Content-Type': 'text/html'});
                if(err) 
                    response.write(err.mensagem); 
                else
                    response.send(data);
                });
        }else{
            response.write("<html><body><h1>PAGE NOT FOUND!</h1></body></html>");
        }
         // envia uma resposta para o cliente
});

// Coloca o servidor à espera de pedidos através da porta 3000 na máquina local
server.listen(port);
// Imprime mensagem no terminal do servidor
console.log('Servidor Node.js em execucao');