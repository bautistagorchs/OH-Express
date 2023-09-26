"use strict";

const express = require("express");
const callRouter = require("./routes/index");

const app = express();

app.use(express.json());
app.use("/", callRouter);

module.exports = app;

if (!module.parent) app.listen(3000);
