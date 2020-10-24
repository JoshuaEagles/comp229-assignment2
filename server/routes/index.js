// index.js - Joshua Eagles - 301078033 - 2020-10-24

let express = require('express');
let router = express.Router();
let controller = require('../controllers/index');

// GET Root page.
router.get('/', (req, res, next) => {
	// Simply redirects to home rather than being a duplicate of home
	res.redirect('/home')
});

// GET Home page.
router.get('/home', controller.displayHomePage);

// GET About Me page.
router.get('/about', controller.displayAboutMePage);

// GET Projects page.
router.get('/projects', controller.displayProjectsPage);

// GET Services page.
router.get('/services', controller.displayServicesPage);

// GET Contact Me page.
router.get('/contact', controller.displayContactMePage);

module.exports = router;
