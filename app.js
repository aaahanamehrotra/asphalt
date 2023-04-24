const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
app.use(express.static(__dirname + "/public"));

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use("/", express.static("public"));
app.use(express.urlencoded({ extended: false }));
// data
const members = require("./data/members.js");
const alumni = require("./data/alumni.js");
// pages
app.get("/", (req, res) => res.render("index"));
app.get("/members", (req, res) => res.render("members", { members: members }));
app.get("/alumni", (req, res) => res.render("alumni", { members: alumni }));
app.get("/articles", (req, res) => res.render("articles"));
app.get("/magazine", (req, res) => res.render("magazine"));
app.get("/article/:num", (req, res) => res.render("article"));

app.listen(3000, console.log("listening"));
