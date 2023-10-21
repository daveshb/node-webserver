const http = require('http');

const server = http.createServer((req, res) => {

    // console.log(req);

    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.writeHead(200);

    res.write('Hola mundo desde NodeJS');
    res.end();
});

server.listen(8080, () => {
    console.log('Escuchando el puerto 8080');
});

