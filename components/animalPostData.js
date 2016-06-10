var React = require('react');
var AnimalPostForm = require('./animalPostFrom');

var AnimalPostData = React.createClass({
	getInitialState: function(){
		return {
			name: null, 
			species: null, 
			color: null,
			age: null
		}
	},

	handleNameChange: function(e){
		this.setState({ name: e.target.value })
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

		var animal = {};
		animal.name = this.state.name;
		animal.species = this.state.species; 
		animal.color = this.state.color;
		animal.age = this.state.age;

		this.handleNewAnimalPost(animal);
		this.setState({ name: '', species: '', color: '', age: '' })
	},

	handleNewAnimalPost: function(animal){
		$.ajax({
			url: '/animals', 
			method: 'POST',
			data: animal,
			success: function(data){
			this.props.getAllAnimalsFromServer();
			}.bind(this),
			error: function(xhr, status, err){
				console.error('/animals', status, err.toString())
			}.bind(this)	
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