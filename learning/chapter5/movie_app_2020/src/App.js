import React, { Fragment } from 'react';

class App extends React.Component {
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

	render() {
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
