// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

var app = express();


// Routers
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

var PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json 
app.use(bodyParser.json());

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('you posted:\n');
    res.end(JSON.stringify(req.body, null, 2));
});

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});