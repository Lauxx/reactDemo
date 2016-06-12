// AnimalApp
//	  AnimalPostData
//		 AnimalPostForm	
// 	  Animals

var React = require('react');
var AnimalPostForm = require('./animalPostFrom');

var AnimalPostData = React.createClass({
	propTypes: function() {
		toggleActiveComponent: React.PropTypes.func.isRequired
	},

	getInitialState: function(){
		return {
			name: null, 
			species: null, 
			color: null,
			age: null
		}
	},

	handleNameChange: function(e){
		this.setState({ name: e.target.value });
	},

	handleSpeciesChange: function(e){
		this.setState({ species: e.target.value })
	},

	handleColorChange: function(e){
		this.setState({ color: e.target.value })
	},

	handleAgeChange: function(e){
		this.setState({ age: e.target.value })
	},


	handleAnimalSubmit: function(e){
		
		e.preventDefault();

		var animal={};
		animal.name = this.state.name;
		animal.species = this.state.species; 
		animal.color = this.state.color;
		animal.age = this.state.age;


		if(!animal.name && !animal.species && !animal.color && !animal.age){
			return;
		} else {
		this.handleNewAnimalPost(animal);
		this.setState({ name: '', species: '', color: '', age: ''});
		}
	},

	handleNewAnimalPost: function(animal){
		var self = this;
		$.ajax({
			url: '/animals', 
			method: 'POST',
			dataType: 'json',
			data: animal,
			success: function(data){
			self.props.toggleActiveComponent('allAnimals');
			}.bind(self),
			error: function(xhr, status, err){
				console.error('/animals', status, err.toString())
			}.bind(self)	
		})
	}, 


	render: function(){
		return (
			<div>
				<AnimalPostForm 
				handleAnimalSubmit={ this.handleAnimalSubmit }
				handleNameChange={ this.handleNameChange }
				handleSpeciesChange={ this.handleSpeciesChange}
				handleColorChange={ this.handleColorChange }
				handleAgeChange={ this.handleAgeChange }/>
			</div>
			)
	}
});

module.exports = AnimalPostData;