var React = require('react');
var AnimalData = require('./animalData');


var Animals = React.createClass({
	
	deleteAnimalFromServer: function(){
		var self = this;
		$.ajax({
			method: 'DELETE', 
			url: '/animals/' + self.props.id
		}).done(function(){
			self.loadAnimalsFromServer();
		})
	},

	loadAnimalsFromServer: function(){
		var self = this; 
		$.ajax({
			method: 'GET', 
			url: '/animals'
		}).done(function(data){
			self.setState({ animalArray: data });
		})
	},

	componentDidMount: function(){
		this.loadAnimalsFromServer();
	},


	render: function(){
		
		return (
			<div>
				<AnimalData id={this.props.id} name={this.props.name} species={this.props.species} color={this.props.color} age={this.props.age} deleteAnimal={this.deleteAnimalFromServer}/>
				
			</div>
			)
	}
});

module.exports = Animals;