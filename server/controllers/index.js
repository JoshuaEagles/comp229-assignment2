// index.js - Joshua Eagles - 301078033 - 2020-10-25

module.exports.displayHomePage = (req, res, next) => {
	res.render('index', {title: 'Home', partialName: 'home', username: req.user ? req.user.username : ''});
};

module.exports.displayAboutMePage = (req, res, next) => {
	res.render('index', {title: 'About Me', partialName: 'about', username: req.user ? req.user.username : ''});
};

module.exports.displayProjectsPage = (req, res, next) => {
	res.render('index', {title: 'Projects', partialName: 'projects', username: req.user ? req.user.username : ''});
};

module.exports.displayServicesPage = (req, res, next) => {
	res.render('index', {title: 'Services', partialName: 'services', username: req.user ? req.user.username : ''});
};

module.exports.displayContactMePage = (req, res, next) => {
	// Don't need to provide the partialName since this is a separate view, no partial is used
	res.render('contact', {title: "Contact Me", username: req.user ? req.user.username : ''});
};
