require("dotenv").config();
const express = require("express");
const app = express();
const bodyPaser = require("body-parser");
const mongoose = require("mongoose");
//const logs = require("./models/logs");
const methodOverride = require("method-override");
const Log = require("./models/logs");

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine()); //similar to requiring
app.use(methodOverride("_method"));

//========Connection to Database========//
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("strictQuery", true);

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//==============Middleware==============//
app.use(express.urlencoded({ extend: false }));
app.use(bodyPaser.urlencoded({ extended: false }));

//================ROUTES================//

//Index
app.get("/logs", (req, res) => {
  // res.render("Index");
  Log.find({}, (error, allLogsArgument) => {
    res.render("Index", {
      logs: allLogsArgument,
    });
  });
});

// app.get("/fruits", (req, res) => {
//   //find all fruits
//   Fruit.find({}, (error, allFruitsArgument) => {
//     res.render("fruits/Index", {
//       fruits: allFruitsArgument,
//     });
//   });
// });

//Show
// app.get("/logs/:id", (req, res) => {
//   Log.findById(req.params.id, (err, foundLog) => {
//     res.render("Show", {
//       logs: foundLog,
//     });
//   });
// });

//New
app.get("/logs/new", (req, res) => {
  res.render("New");
});

//Create;
app.post("/logs", (req, res) => {
  Log.create(req.body, (error, newLog) => {
    res.redirect("/logs");
  });
});

// app.post("/logs", (req, res) => {
//   if (req.body.shipIsBroken === "on") {
//     req.body.shipIsBroken = true;
//   } else {
//     req.body.shipIsBroken = false;
//   }

//   Log.create(req.body, (error, createdLog) => {
//     res.send(createdLog);
//   });
// });

//Edit

//Update

//Delete

app.listen(3000, () => {
  console.log("listening on port 3000");
});
