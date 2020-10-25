// login.js - Joshua Eagles - 301078033 - 2020-10-25

let passport = require('passport');

module.exports.displayLoginPage = (req, res, next) => {
	if (!req.user) 
	{
		return res.render('index', {title: "Login", partialName: "login", messages: req.flash("loginMessages"), username: req.user ? req.user.username : ''});
	}
	return res.redirect('/');
};

module.exports.processLoginPage = (req, res, next) => {
	console.log('test1');
	passport.authenticate('local', (err, user, info) => {
		if (!user) {
			console.log('test2');
			req.flash("loginMessages", "Authentication Error");
			return res.redirect('/login');
		}
		console.log('test2.5');

		req.login(user, (err) => {
			console.log('test3');
			res.redirect('/business_contacts');
		});
	})(req, res, next);
};
