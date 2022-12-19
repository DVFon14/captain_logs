const express = require("express");
const app = express();

const logs = ["day0", "day1", "day2"];

//Index
app.get("/logs", (req, res) => {
  res.send(logs);
});

//Show
app.get("/logs/:id", (req, res) => {
  res.send(logs[req.params.id]);
});

//New

//Create

//Edit

//Update

//Delete

app.listen(3000, () => {
  console.log("listening on port 3000");
});
