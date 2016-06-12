var React = require('react');
var AllAnimals = require('./allAnimals.js');

var AllAnimalsData = React.createClass({
	getInitialState: function(){
		return {
			animals: []
		}
	},

	deleteAnimalFromServer: function(id){
		var self = this;
		$.ajax({
			url: '/animals/' + id, 
			method: 'DELETE'
		}).done(function(){
			self.getAllAnimalsFromServer();
		})
	},

	getAllAnimalsFromServer: function(){
		var self = this;
		$.ajax({
			url: '/animals',
			method: 'GET'
		}).done(function(data){
			self.setState({ animals: data })
		})
	},

	componentDidMount: function(){
		this.getAllAnimalsFromServer();
	},

	render: function(){
		return (
			<div>
				<AllAnimals 
				animals={ this.state.animals } 
				getId={ this.props.getId }
				deleteAnimal= { this.deleteAnimalFromServer }/>
			</div>
			)
	}
});

module.exports = AllAnimalsData;