const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Settings
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'../app/views'));

// Middleware
app.use(bodyParser.urlencoded({extended: true}));

module.exports = app;