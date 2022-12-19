const express = require("express");
const app = express();

//Index
app.get("/logs", (req, res) => {
  res.send("new");
});
//Show

//New

//Create

//Edit

//Update

//Delete

app.listen(3000, () => {
  console.log("listening on port 3000");
});
