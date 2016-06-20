var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Page = require('../models/page.js');
var adminUser = require('../models/admin-users.js');

router.get('/', function(req, res) {
	res.send('API area');
});
