const express = require('express');

const port = 3000;
const app = express();

const www = express.static(__dirname + '/www');

app.use('/', www);

app.listen(port);
console.log(`Running at localhost:${port}`);
