// business_contacts.js - Joshua Eagles - 301078033 - 2020-10-25

let mongoose = require('mongoose');

let contactsSchema = mongoose.Schema(
{
	name: String,
	phone: String,
	email: String
},
{
	collection: "business_contacts"
});

module.exports = mongoose.model("business_contacts", contactsSchema);
