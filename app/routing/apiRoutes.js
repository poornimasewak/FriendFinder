var friends = require('../data/friends.js');
var path = require('path');


module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
        // console.log(res);
    });


    app.post('/api/friends', function (req, res) {
        // friends.push(req.body);
        // console.log(req.body);

        // ====================================================================================
        var greatMatch = {
            name: "",
            image: "",
            matchDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userImage = userData.image;
        var userScores = userData.scores;

        var totalDifference = 0;

        //loop through the friends data array of objects to get each friends scores except the last as its you
        for (var i = 0; i < friends.length; i++) {


            //loop through that friends score and the users score and calculate the 
            // absolute difference between the two and push that to the total difference variable set above
            for (var j = 0; j < 10; j++) {
                // resetting the value to 0 each time loop runs
                totalDifference = 0;
                // console.log(userScores[j]);
                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= greatMatch.matchDifference) {

                    // Reset the bestMatch to be the new friend. 
                    greatMatch.name = friends[i].name;
                    greatMatch.image = friends[i].photo;
                    greatMatch.matchDifference = totalDifference;

                }
            }
            // console.log("==" + totalDifference + "==\n");
        }

        friends.push(userData);

        res.json(greatMatch);
    });

};