var mongoose = require('mongoose');

var geoSchema = new mongoose.Schema({
	location: [{}]
});

module.exports = mongoose.model('Geo', geoSchema);