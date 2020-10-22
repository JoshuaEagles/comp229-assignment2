// business_contacts.js - Joshua Eagles - 301078033 - 2020-10-22

let express = require('express');
let router = express.Router();

let businessContacts = require('../models/business_contacts');

router.get('/', (req, res, next) => {
	let contactsList = null
	businessContacts.find((err, returnedValues) => {
		console.log(returnedValues);
		res.render('index', {title: 'Business Contacts', partialName: 'business_contacts', contacts: returnedValues});
	});
});

module.exports = router;
