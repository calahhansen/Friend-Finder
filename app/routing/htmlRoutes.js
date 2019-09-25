// DEPENDENCIES
//===============================================================
const path = require("path");

module.exports = function(app) {

// HTML ONLY Routes
// =============================================================

// Basic route that sends the user first to the main Page
app.get("/", function(req, res) {
    console.log("welcome to friend-finder!")
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
//Route that sends the user to the survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
}