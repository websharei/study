import React, { Fragment } from 'react';

class App extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};

	componentDidMount() {
		// 영화 데이터 로딩!
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 6000);
	}

	render() {
		const { isLoading } = this.state;
		return (
			<Fragment>
				{isLoading ? 'Loading...' : 'We are redy'}
			</Fragment>
		);
	}
}

export default App;
