var friendData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    })

    app.post("/api/friends", function(req, res){
       var user = req.body.scores.map(Number);
        console.log(user);
        
        var bestFriend = {
            name: "",
            photo: "",
            scoreDiff: 1000
        };

        var totalDiff = 0;

        // for (var i = 0; i < friendData.length; i++){

        //     totalDiff = 0;

        //     for (var j = 0; j < friendData[i]; j++){
        //         totalDiff += Math.abs((user[j]) - (friendData[i].scores[j]));
        //         if (totalDiff <= bestFriend.scoreDiff){

        //             bestFriend.name = friendArray[i].name;
        //             bestFriend.photo = friendArray[i].photo;
        //             bestFriend.scoreDiff = totalDiff;
        //         }
        //     }
        // }

        // friendData.push(user);
        // // console.log("44: "+ userData.name);
        


        // res.json(bestFriend);
        // // console.log("49: " + bestFriend.name);
    });
}
