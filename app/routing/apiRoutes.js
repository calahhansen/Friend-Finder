// Dependencies
// =============================================================
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API ONLY Routes
//==================================================================
// Displays all people on the friends list
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
  // Displays a single person, or returns false
  app.get("/api/friends/:person", function(req, res) {
    var chosen = req.params.friend;
  
    console.log(chosen);
  
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Friend - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
    console.log("newFriend", newFriend)
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);
  });