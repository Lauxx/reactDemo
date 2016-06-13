var React = require('react');
var EditAnimalForm = require('./editAnimalForm.js');

var EditAnimalData = React.createClass({
	getInitialState: function(){
		return {
			name: null, 
			color: null, 
			age: null, 
			species: null
		}
	},

	loadOneAnimalFromServer: function(){
		var self = this;
		$.ajax({
			url: '/animals/' + self.props.id,
			method: 'GET'
		}).done(function(data){
			self.setState({
				name: data.name,
				color: data.color,
				age: data.age, 
				species: data.species
			})
		})
	},

	updateAnimal: function(animal){
		
		$.ajax({
			url: '/animals/' + this.props.id,
			method: 'PUT', 
			dataType: 'json', 
			data: animal,
			success: function(data){
				this.props.toggleActiveComponent("allAnimals");
				this.loadOneAnimalFromServer();
			}.bind(this),
			error: function(xhr, status, err){
				console.error(status, err.toString());
			}.bind(this) 
		})
	},


	handleEditAnimalSubmit: function(e){
		e.preventDefault();

		var name = this.state.name;
		var color = this.state.color;
		var species = this.state.species;
		var age = this.state.age;

		this.updateAnimal({ name: name, color: color, species: species, age: age });
	},

	onNameChange: function(e){
		this.setState({ name: e.target.value });
	},

	onSpeciesChange: function(e){
		this.setState({ species: e.target.value })
	},

	onColorChange: function(e){
		this.setState({ color: e.target.value })
	},

	onAgeChange: function(e){
		this.setState({ age: e.target.value })
	},


	componentDidMount: function(){
		this.loadOneAnimalFromServer();
	},

	render: function(){
		return (
			<div>
				<EditAnimalForm 
				name={ this.state.name }
				color={ this.state.color }
				age={ this.state.age }
				species={ this.state.species }
				handleEditAnimalSubmit={ this.handleEditAnimalSubmit }
				onNameChange={ this.onNameChange }
				onAgeChange={ this.onAgeChange }
				onColorChange={ this.onColorChange }
				onSpeciesChange={ this.onSpeciesChange }/>
			</div>
			)
	}
});

module.exports = EditAnimalData;