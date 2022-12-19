const express = require("express");
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine()); //similar to requiring

//Index

//Show

//New
app.get("/logs/new", (req, res) => {
  res.render("New");
});

//Create

//Edit

//Update

//Delete

app.listen(3000, () => {
  console.log("listening on port 3000");
});
