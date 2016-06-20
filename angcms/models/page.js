var mongoose = require('mongoose');
var Schema = mongoose.Schema;
	var Page = new Schema ({
		title: String,
		url: {type: String, index:{unique: true}},	
		content: String,
		menuIndex: Number,
		date: Date });
		var Page = mongoose.model('Page', page);
		module.exports = Page;


