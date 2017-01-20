// Dependencies
var path = require('path');

// Routing to HTML pages
module.exports = function (app) {
    // HTML GET request takes user to the HTML page requested.
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // default to home if not matching route found
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};