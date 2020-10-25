// business_contacts.js - Joshua Eagles - 301078033 - 2020-10-24

let businessContacts = require('../models/business_contacts');

// This is added as middleware to redirect to the login page when not authenticated for all pages
module.exports.protectContactsList = (req, res, next) => {
	console.log(req.user);
	if (!req.user)
	{
		res.redirect('/login');
	}
	next();
};

module.exports.displayContactsList = (req, res, next) => {
	businessContacts.find((err, returnedContacts) => {
		res.render('index', {title: 'Business Contacts', partialName: 'business_contacts', contacts: returnedContacts});
	}).sort({name: 1});
};

module.exports.displayContactUpdate = (req, res, next) => {
	let id = req.params.id;

	businessContacts.findById(id, (err, targetContact) => {
		res.render('index', {title: "Update Contact", partialName: 'update', contact: targetContact});
	});
};

module.exports.processContactUpdate = (req, res, next) => {
	let id = req.params.id;

	let updatedContact = businessContacts({
		"_id": id,
		"name": req.body.name,
		"phone": req.body.phone,
		"email": req.body.email
	});

	businessContacts.updateOne({_id: id}, updatedContact, (err) => {
		res.redirect('/business_contacts');
	});
};

module.exports.processContactDelete = (req, res, next) => {
	businessContacts.deleteOne({_id: req.params.id}, (err) => {
		res.redirect("/business_contacts");
	});
};
