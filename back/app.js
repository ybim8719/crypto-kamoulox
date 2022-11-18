const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const app = express();

app.get('/',  (req, res, next) => {
    res.send('Hello World');
    next();
 })

const server = app.listen(3001, () => {
    console.log('listening');
});
