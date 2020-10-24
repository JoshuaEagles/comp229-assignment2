// login.js - Joshua Eagles - 301078033 - 2020-10-24

let express = require('express');
let router = express.Router();
let controller = require('../controllers/login.js');

// GET Login page.
router.get('/', controller.displayLoginPage);

module.exports = router;
