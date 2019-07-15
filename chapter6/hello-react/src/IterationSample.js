import React, { Component } from 'react';

class IterationSample extends Component {
	state = {
		names:['눈사람', '얼음', '눈', '바람']
	};
	render() {
		const nameList = this.state.names.map(
			(name, index) => (<li key={index}>{name}</li>)
		);
		return (
			<div>
				<ul>
					{nameList}
				</ul>
			</div>
		);
	}
}

export default IterationSample;