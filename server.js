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

//New
app.get("/logs/new", (req, res) => {
  res.render("New");
});

//Show
app.get("/logs/:id", (req, res) => {
  Log.findById(req.params.id, (error, foundLog) => {
    res.render("Show", {
      log: foundLog,
    });
  });
});

//Create;
app.post("/logs", (req, res) => {
  Log.create(req.body, (error, newLog) => {
    res.redirect("/logs");
  });
});

// app.post("/logs", (req, res) => {
// req.body.readyToEat = !readyToEat ? false : true;
//   Log.create(req.body, (error, createdLog) => {
//     res.redirect("/logs");
//   });
// });

//Edit
app.get("/logs/:id/edit", (req, res) => {
  //find my log by id
  Log.findById(req.params.id, (error, foundLog) => {
    //render an edit form
    res.render("Edit", {
      //pass in the log data
      log: foundLog,
    });
  });
});

//Update
app.put("/logs/:id", (req, res) => {
  //check if the ship is broken
  if (req.body.readyToEat === "on") {
    req.body.shipIsReady = true;
  } else {
    req.body.shipIsReady = false;
  }
  //find Log by id and update it
  Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
    console.log(updatedLog);
    // redirect to the fruit show page
    res.redirect(`/logs/${req.params.id}`);
  });
});

//Delete
app.delete("/logs/:id", (req, res) => {
  Log.findByIdAndRemove(req.params.id, (err, deletedLog) => {
    res.redirect("/logs");
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
