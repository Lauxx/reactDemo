var React = require('react');

var AnimalPostForm = React.createClass({
	render: function(){
		return (
		<div>	
			<div className="container forms">
				<form className="form-inline" onSubmit={this.props.handleAnimalSubmit}>
					<div className="form-group">
						<label for="exampleInputName2">Name</label>
						<input type="text" className="form-control" value={this.props.name} onChange={this.props.handleNameChange} placeholder="Name"/>
					</div>
					<div className="form-group">
						<label>Species</label>
						<input  className="form-control" value={this.props.species} onChange={this.props.handleSpeciesChange} placeholder="Species"/>
					</div>
					<div className="form-group">
						<label>Color</label>
						<input className="form-control" value={this.props.color} onChange={this.props.handleColorChange} placeholder="Color"/>
					</div>
					<div className="form-group">
						<label>Age</label>
						<input className="form-control" value={this.props.age} onChange={this.props.handleAgeChange} placeholder="Age"/>
					</div>
					<button type="submit" className="btn btn-primary">Post Animal</button>
				</form>
			</div>
		</div>	
			)
	}
});

module.exports = AnimalPostForm;