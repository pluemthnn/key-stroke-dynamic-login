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

app.post("/register", register)
app.post("/login", login)

async function login(req, res) {
  console.log("on seaching for username...");
  const user = await iService.getByUsername(req.body)
  if (user == null) return res.status(400).json({message: "Please enter a valid Username or Password"})

    if ((user.userbiokey-user.Threshold < req.body.userbiokey) && (user.userbiokey+user.Threshold > req.body.userbiokey)) {
      return res.json(user)
    } else {
      return res.status(400).json({message: "Please enter a valid Password"})
    }
}

function register(req, res, next) {
  console.log("on creating...");
  iService.create(req.body)
      .then(() => res.json({}))
      .catch(err => next(err));
}

