var React = require('react');
var AnimalCard = require('./animalCard.js');

var AllAnimals = React.createClass({
	render: function(){

		var animal = this.props.animals.map(function(item){
			return <AnimalCard key={item._id}
							   id={item._id}
							   name={item.name}
							   color={item.color}
							   age={item.age}
							   species={item.species} />
		});

		return (
			<div>
				{animal}
			</div>
			)
	}
});

module.exports = AllAnimals;