// business_contacts.js - Joshua Eagles - 301078033 - 2020-10-24

let express = require('express');
let router = express.Router();

let controller = require('../controllers/business_contacts.js');

// GET Business Contacts List page
router.get('/', controller.displayContactsList);

module.exports = router;
