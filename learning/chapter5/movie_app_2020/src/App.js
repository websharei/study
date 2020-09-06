import React, { Fragment } from 'react';

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log('hello');
	}

	state = {
		count: 0,
	};

	add = () => {
		// console.log('add');
		this.setState(current => ({
			count: current.count + 1,
		}));
	};

	minus = () => {
		// console.log('minus');
		this.setState(current => ({
			count: current.count - 1,
		}));
	};

	componentDidMount() {
		console.log('component rendered');
	}

	componentDidUpdate() {
		console.log('I just updated');
	}

	componentWillUnmount() {
		console.log('Goodbye, cruel world');
	}

	render() {
		console.log('I\'m rendering');
		return (
			<Fragment>
				<h1>The number is: {this.state.count}</h1>
				<button type="button" onClick={this.add}>Add</button>
				<button type="button" onClick={this.minus}>Minus</button>
			</Fragment>
		);
	}
}

export default App;
