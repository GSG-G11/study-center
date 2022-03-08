const { join } = require('path');
const express = require('express');
const compression = require('compression');
const router = require('./routes');

const  { clientError, serverError } = require('./controllers');


const app = express();

app.set('port', process.env.PORT || 8080);

app.use(compression());
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'public'), { maxAge: '30d' }));

app.use(router);

app.use(clientError);
app.use(serverError);

module.exports = app;