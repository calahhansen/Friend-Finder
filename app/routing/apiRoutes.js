// API ONLY LOAD DATA
//==================================================================
const friendsArray = require("../data/friends");

//ROUTING
//====================================================================
module.exports = function(app) {

  //API GET Requests for ALL friends; localhost:3000/api/ returns a JSON of the friends data
  app.get("/api/friends", function(req,res) {
    res.json(friendsArray);
  });
  // API GET Requests for a single person, or returns false
  app.get("/api/friends/:name", function(req, res) {
    let chosen = req.params.name;
  
    console.log(chosen);
  
    for (let i = 0; i < friendsArray.length; i++) {
      if (chosen === friendsArray[i].routeName) {
        return res.json(friendsArray[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Friend - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newFriend = req.body;
    console.log("newFriend", newFriend)
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    friendsArray.push(newFriend);
  
    res.json(newFriend);
  });
}