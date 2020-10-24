// business_contacts.js - Joshua Eagles - 301078033 - 2020-10-24

let businessContacts = require('../models/business_contacts');

module.exports.displayContactsList = (req, res, next) => {
	businessContacts.find((err, returnedValues) => {
		res.render('index', {title: 'Business Contacts', partialName: 'business_contacts', contacts: returnedValues});
	});
};
