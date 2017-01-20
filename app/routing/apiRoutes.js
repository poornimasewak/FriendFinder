var friendsData = require('../data/friends.js');
// var path = require('path');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
        // console.log(res);
    });
};

// app.post('/api/friends', function (req, res) {
//     friends.push(req.body);
// });