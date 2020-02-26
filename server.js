//set up node server
//require express and mongose
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//port we will work with

const PORT = process.env.PORT || 8080;

//initalize app

const app = express();

//set up router
const router = express.Router();

// landing page
app.use(express.static(__dirname + "/public"));

//bodyParser in app
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());

//routing through pages
app.use(router);

//deployed DB
const db = process.env.MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function (err) {
    //log errors
    if (err) {
        console.log(err);
    }
    else {
        console.log("db connected");
    }
});


//listen

app.listen(PORT, function () {
    console.log("Listening on port: " + PORT);
})