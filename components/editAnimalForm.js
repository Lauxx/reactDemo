var React = require('react');

var EditAnimalForm = React.createClass({
	render: function(){
		return (
		<div>
			<div className="container forms col-xs-6 col-xs-offset-2">	
				<form className="well"  onSubmit={ this.props.handleEditAnimalSubmit }>
					<div className="form-group">
						<label >Name</label>
						<input type="text" className="form-control" 
						onChange={ this.props.onNameChange } value={ this.props.name }
						/>
					</div>
					<div className="form-group">
						<label>Species</label>
						<input  className="form-control"  
						onChange={ this.props.onSpeciesChange } value={ this.props.species }
						/>
					</div>
					<div className="form-group">
						<label>Color</label>
						<input className="form-control" 
						onChange={ this.props.onColorChange } value={ this.props.color }
						/>
					</div>
					<div className="form-group">
						<label>Age</label>
						<input className="form-control" 
						onChange={ this.props.onAgeChange } value={ this.props.age }
						/>
					</div>
					<button type="submit"  className="btn btn-primary">Post Animal</button>
				</form>
			</div>	
		</div>
			)
	}
});

module.exports = EditAnimalForm;