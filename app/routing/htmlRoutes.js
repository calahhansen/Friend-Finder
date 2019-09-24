// DEPENDENCIES
//===============================================================
const path = require("path");

module.exports = function(app) {

// HTML ONLY Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    console.log("welcome to friend-finder!")
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
}