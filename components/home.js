var React = require('react');
var MyMap = require('./map.js');
var Geolocator = require('./geolocator.js');

var Home = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Hello, from your home planet!</h1>
					<Geolocator />
					
			</div>
			)
	}
});

module.exports = Home;