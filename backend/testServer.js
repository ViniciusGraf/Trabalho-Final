const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Servidor está funcionando!\n');
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
