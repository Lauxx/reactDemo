var React = require('react');

var AnimalCard = React.createClass({
	render: function(){
		return (
			<div>
				<div className="well animalCard col-xs-4">
					<h3> Name is: { this.props.name } </h3>
					<h3> Color is: { this.props.color } </h3>
					<h3> Species is: { this.props.species } </h3>
					<button className="btn btn-danger" onClick={ this.props.deleteAnimal.bind(null, this.props.id)}>Delete</button>
				</div>	
			</div>
			)
	}
});

module.exports = AnimalCard;