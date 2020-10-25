// business_contacts.js - Joshua Eagles - 301078033 - 2020-10-24

let express = require('express');
let router = express.Router();

let controller = require('../controllers/business_contacts.js');

// GET List page
router.get('/', controller.displayContactsList);

// GET Update page
router.get('/edit/:id', controller.displayContactUpdate);

// POST Update page 
router.post('/edit/:id', controller.processContactUpdate);

// POST Delete page
router.get('/delete/:id', controller.processContactDelete);

module.exports = router;
