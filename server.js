require("dotenv").config();
const express = require("express");
const app = express();
const bodyPaser = require("body-parser");
const mongoose = require("mongoose");
const Logs = require("./models/logs");
const methodOverride = require("method-override");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine()); //similar to requiring

app.use(express.urlencoded({ extend: false }));
app.use(methodOverride("_method"));

//========Connection to Database========//
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//==============Middleware==============//

//================ROUTES================//
//Index

//Show

//New
app.get("/logs/new", (req, res) => {
  res.render("New");
});

//Create
app.post("/logs", (req, res) => {
  Logs.create(req.body, (error, newLog) => {
    res.redirect("/logs");
  });
});

//Edit

//Update

//Delete

app.listen(3000, () => {
  console.log("listening on port 3000");
});
