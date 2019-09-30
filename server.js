// Dependencies
// =============================================================
const express = require("express");
// const path = require("path"); moved this to htmlRoutes.js
// const serve   = require('express-static'); attempted to install to get css working

// Sets up the Express App - basic properties for the express server
// =============================================================
const app = express(); //tells node to "create" express app
// app.use(serve(__dirname + '/public')); //attempting to install static to read css files from local host

const PORT = process.env.PORT || 3000;  //port set-up that is used in listener below

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));
//ROUTER points the server to the routes files - route files tell the server how to respond to data requests from URLs

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
