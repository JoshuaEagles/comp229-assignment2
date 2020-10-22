// login.js - Joshua Eagles - 301078033 - 2020-10-22

let express = require('express');
let router = express.Router();

// GET Login page.
router.get('/', (req, res, next) => {
	res.render('index', {title: 'Login', partialName: 'login'});
});

module.exports = router;
