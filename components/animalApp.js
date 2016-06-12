// AnimalApp
//	  AnimalPostData
//		 AnimalPostForm	
// 	  Animals

var React = require('react');
var AnimalPostData = require('./animalPostData');
var AllAnimalsData = require('./allAnimalsData.js');
var Toggler = require('./toggle.js');

var AnimalApp = React.createClass({
	getInitialState: function(){
		return {
			activeComponent: 'allAnimals',
			activeAnimalId: null
		}
	},

	getId: function(component, id){
		if(component === "showOneAnimal"){
			return this.setState({ activeAnimalId: id, component: 'oneAnimal'})
		} else if(component === "editOneAnimal"){
			return this.setState({ activeAnimalId: id, component: 'editAnimal'})
		} else {
			return null;
		}
	},

	showComponent: function(){
		if(this.state.activeComponent === 'postAnimalForm'){
			return <AnimalPostData toggleActiveComponent={this.toggleActiveComponent}/>
		} else if(this.state.activeComponent === "allAnimals"){
			return <AllAnimalsData 	/>
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