var React = require('react');

//this components only responsibility is to render data
//also referred to as a stateless function - doesn't do anything with getting initial state
//just show me the data that was passed down from animals.js via the <AnimalData component
//with the properties inlcuded.  Once passed down it is accessed 
//with {this.props.'property name from level up'}

var AnimalData = React.createClass({
	render: function(){

		return (
			<div>	
				<h3> My name is: {this.props.name } </h3>
				<h4> My colors are: {this.props.color}</h4>
				<h4> My common species name is: {this.props.species}</h4>
				<h4> My age is: {this.props.age}</h4>
			</div>
			)
	}
});

module.exports = AnimalData;