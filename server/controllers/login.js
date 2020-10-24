// login.js - Joshua Eagles - 301078033 - 2020-10-24

module.exports.displayLoginPage = (req, res, next) => {
	res.render('index', {title: 'Login', partialName: 'login'});
};
