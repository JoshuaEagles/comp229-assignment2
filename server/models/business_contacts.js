// business_contacts.js - Joshua Eagles - 301078033 - 2020-10-22

let mongoose = require('mongoose');

let contactsModel = mongoose.Schema(
{
	name: String,
	phone: String,
	email: String
},
{
	collection: "business_contacts"
});

module.exports = mongoose.model("business_contacts", contactsModel);
