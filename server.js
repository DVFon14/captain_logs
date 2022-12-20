const express = require("express");
const app = express();
const bodyPaser = require("body-parser");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine()); //similar to requiring

//========Connection to Database========//
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
  res.send("received");
});

//Edit

//Update

//Delete

app.listen(3000, () => {
  console.log("listening on port 3000");
});
