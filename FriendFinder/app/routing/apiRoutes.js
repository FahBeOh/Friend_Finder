// Require friend data from data array
var friendData = require("../data/friends");
// Exports API route handlers 
module.exports = function(app) {
    // Displays list of all friends in database to user
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });
    // Handles data that is submitted from survey
    app.post("/api/friends", function(req, res){
        // Changes scores from strings to numbers
       req.body.scores = req.body.scores.map(Number);
        // Delcares a bestFriend object
        var bestFriend = {
            name: "",
            photo: "",
            scoreDiff: 50
        };
        // Declares a variable to store the total difference in score values of user and users stored in the database
        var totalDiff = 0;
        // Loops through friend array/database
        for (var i = 0; i < friendData.length; i++) {
            // Sets totalDiff to 0 before each comparison of user scores to stored scores in the database
            totalDiff = 0;
            // Loops through scores of user and scores in the database and updates total difference 
            for (var j = 0; j < friendData[i].scores.length; j++) {
                totalDiff += Math.abs(req.body.scores[j] - friendData[i].scores[j]);
            }
            // If the total difference is less than the "current bestfriend", update the best/compatable friend
            if (totalDiff <= bestFriend.scoreDiff) {
                bestFriend.name = friendData[i].name;
                bestFriend.photo = friendData[i].photo;
                bestFriend.scoreDiff = totalDiff;
            }
        }
        // Add new user data to database/friend array
        friendData.push(req.body);
        // Send current bestfriend to clientside
        res.json(bestFriend);
    });
}
