// AnimalApp
// 	  Animals
// 		AnimalData

var React = require('react');
var Animals = require('./animals');
var AnimalPostData = require('./animalPostData');

var AnimalApp = React.createClass({
	getInitialState: function(){
		return {
			animals: []
		}
	},

	getAllAnimalsFromServer: function(){
		var self = this;
		$.ajax({
			method: 'GET',
			url: '/animals'
		}).done(function(data){
			console.log(data);
			self.setState({ animals: data })
		})
	},

	componentDidMount: function(){
		this.getAllAnimalsFromServer();
	},

	render: function(){
		var animalArr = this.state.animals.map(function(item){
			return <Animals   name={ item.name } 
							  species={ item.species }
							  color={ item.color } 
							  age={ item.age } 
							  key={ item._id }
							  id={ item._id }
							  />
		});

		return (
			<div>
				{ animalArr }
				<div>	
					<AnimalPostData getAllAnimalsFromServer={this.getAllAnimalsFromServer}/>
				</div>	
			</div>
			)
	}
});

module.exports = AnimalApp;