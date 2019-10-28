var friendsData = require("../data/friends");

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };
        // Array compare goes here to end with a res.json(bestfriend) returning
        // the person with the closest scores to the user submission
        var newFriend = req.body;
        var newFriendScore = req.body.scores;

        var totalDiff = 0;

        for (var i = 0; i < friendsData.length; i++) {

            for (var j = 0; j < newFriendScore.length; j++) {
                totalDiff += Math.abs(parseInt(newFriendScore[j] - parseInt(friendsData[i].scores[j])))
            }

            if (totalDiff <= bestMatch.friendDifference) {
                bestMatch.name = friendsData[i].name;
                bestMatch.photo = friendsData[i].photo;
                bestMatch.friendDifference = totalDiff;
            }



            // let soulMate = userData(bestfriend);
            // res.json(soulMate);


        };
        friendsData.push(newFriend)
        res.json(bestMatch);

    })
}