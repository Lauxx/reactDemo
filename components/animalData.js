var React = require('react');

function AnimalData(props){
		return (
			<div>	
				<h3> My name is: { props.name } </h3>
				<h4> My colors are: { props.color}</h4>
				<h4> My common species name is: { props.species}</h4>
				<h4> My age is: { props.age}</h4>
				<button onClick={  props.deleteAnimal.bind(null,  props.id)} type="button" className="btn btn-warning">Delete</button>
			</div>
			)
	};

module.exports = AnimalData;