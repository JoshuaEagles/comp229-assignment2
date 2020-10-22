// user.js - Joshua Eagles - 301078033 - 2020-10-22

let mongoose = require('mongoose');

let userModel = mongoose.Schema(
{
	username: String,
	password: String,
	email: String
},
{
	collection: "user"
});

module.exports = mongoose.model("user", userModel);
