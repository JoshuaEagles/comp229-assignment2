// login.js - Joshua Eagles - 301078033 - 2020-10-25

let passport = require('passport');

module.exports.displayLoginPage = (req, res, next) => {
	if (!req.user) 
	{
		return res.render('index', {title: "Login", partialName: "login"});
	}
	return res.redirect('/');
};

module.exports.processLoginPage = (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		if (!user) {
			req.flash("Authentication Error");
			return res.redirect('/login');
		}

		req.login(user, (err) => {
			res.redirect('/business_contacts');
		});
	})(req, res, next);
};
