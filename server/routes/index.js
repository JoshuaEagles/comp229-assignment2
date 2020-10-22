// index.js - Joshua Eagles - 301078033 - 2020-10-07

let express = require('express');
let router = express.Router();

// GET Root page.
router.get('/', function(req, res, next) {
	// Simply redirects to home rather than being a duplicate of home
	res.redirect('/home')
});

// GET Home page.
router.get('/home', function(req, res, next) {
	res.render('index', { title: 'Home', partialName: 'home' });
});

// GET About Me page.
router.get('/about', function(req, res, next) {
	res.render('index', { title: 'About Me', partialName: 'about' });
});

// GET Projects page.
router.get('/projects', function(req, res, next) {
	res.render('index', { title: 'Projects', partialName: 'projects' });
});

// GET Services page.
router.get('/services', function(req, res, next) {
	res.render('index', { title: 'Services', partialName: 'services' });
});

// GET Contact Me page.
router.get('/contact', function(req, res, next) {
	// Don't need to provide the partialName since this is a separate view, no partial is used
	res.render('contact', { title: "Contact Me" });
});

module.exports = router;
