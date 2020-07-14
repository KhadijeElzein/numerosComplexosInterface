var http = require('http');
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const localServiceProxy = httpProxy('http://localhost:8080');

const httpPort = process.env.GW_PORT || '9090';

// ##### Requisições por proxy #####

// # Requisições gerais #


// Permissão - Menus e usuários
app.all('/api/*', (req, res, next) => {
  localServiceProxy(req, res, next);
});
app.all('/*', res => {
  res
    .status(404)
    .send(
      '<html><body><h1>Erro ao utilizar Gateway</h1></body></html>',
    );
});

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

var server = http.createServer(app);
server.listen(httpPort, () => console.log(`Listening on port ${httpPort}`));
