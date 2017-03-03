const express = require('express');

const app = express();

const www = express.static(__dirname + '/www');

app.use('/', www);

app.listen(8888);
console.log('Running website at localhost:8888');
