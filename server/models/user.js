// user.js - Joshua Eagles - 301078033 - 2020-10-25

let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

// passport-local-mongoose will add a username, hashed password, and salt value, so all we need here is the email
let userSchema = mongoose.Schema(
{
	email: String
},
{
	collection: "user"
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);
