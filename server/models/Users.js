const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    userbiokey: Number,
    Threshold: Number,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;