"use strict";

var express = require("express");

//Importing the routes here...

var app = express();

//Your code here:
// Middleware to parse JSON requests:
//
// Using the routes here:
//
//

module.exports = app; // esto es solo para testear mas facil

if (!module.parent) app.listen(3000);
