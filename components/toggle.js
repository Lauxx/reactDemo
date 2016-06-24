var React = require('react');

var Toggler = React.createClass({

	render: function(){
		return (
			<div>
				<button className="btn btn-warning" 
				onClick={this.props.toggleActiveComponent.bind(null, 'allAnimals')}>
					All Animals 
				</button>
				<button className="btn btn-warning" 
				onClick={this.props.toggleActiveComponent.bind(null, 'postAnimalForm')}>
					Post Animal Form
				</button>
			</div>
			)
	}
});

module.exports = Toggler;