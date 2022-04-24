const express = require("express");
const app = express();
const mongoose = require("mongoose");
const iService = require("./iservice");

const cors = require("cors");

app.use(express.json());
app.use(cors());

// connection to the cluster
mongoose.connect(
  "mongodb+srv://admin-user:qx4sNqOESOaeE9Pb@cluster0.yj6rm.mongodb.net/keystrokeauthen?retryWrites=true&w=majority"
);

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
});

// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// };

// app.use(allowCrossDomain);
app.post("/register", register)
app.post("/login", login)

function login(req, res, next) {
  console.log("on seaching for username...");
  iService.getByUsername(req.body.username)
      .then(user => {
        user ? res.json(user) : res.sendStatus(404)
      })
      .catch(err => next(err));
}

function register(req, res, next) {
  console.log("on creating...");
  iService.create(req.body)
      .then(() => res.json({}))
      .catch(err => next(err));
}

