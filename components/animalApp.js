// AnimalApp
//	  AnimalPostData
//		 AnimalPostForm	
// 	  Animals

var React = require('react');
var AnimalPostData = require('./animalPostData');
var AllAnimalsData = require('./allAnimalsData.js');
var EditAnimalData = require('./editAnimalData.js');
//var SingleAnimalData = require('./singleAnimalData.js');
var Toggler = require('./toggle.js');

var AnimalApp = React.createClass({
	getInitialState: function(){
		return {
			activeComponent: 'allAnimals',
			activeAnimalId: null
		}
	},

	getId: function(component, id){
		if(component === "editOneAnimal"){
			return this.setState({ activeAnimalId: id, activeComponent: 'editAnimal'})
		} else {
			return null;
		}
	},

	showComponent: function(){
		console.log(this.state.activeAnimalId);
		if(this.state.activeComponent ===  "allAnimals"){
			 return <AllAnimalsData getId={ this.getId } />
		} else if(this.state.activeComponent === 'postAnimalForm' ){
			return <AnimalPostData toggleActiveComponent={ this.toggleActiveComponent }/>
		} else if(this.state.activeComponent === "editAnimal"){
			return <EditAnimalData id={ this.state.activeAnimalId } toggleActiveComponent={this.toggleActiveComponent}/>
		} else {
			throw new Error('No active component', this.state.activeComponent) 
		}
	},

	toggleActiveComponent: function(name){
		this.setState({ activeComponent: name })
	},

	render: function(){

		return (
			<div>
				<Toggler toggleActiveComponent={ this.toggleActiveComponent } />	
				{ this.showComponent() }	
			</div>
			)
		}
});


module.exports = AnimalApp;