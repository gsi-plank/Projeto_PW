response.writeHead(200, { "Content-Type": "text/html" });
response.write(
        '<html><title>PROJ - Groups</title> <meta charset="utf-8"> <meta name="viewport"
        content = "width=device-width, initial-scale=1" > <link rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <script
src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script><script
src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> <body>’
);
response.write(txt);
response.write("</body></html>");
response.end();
}
});
server.listen(3000, function () {
console.log('Servidor Node.js em execucao');
});
