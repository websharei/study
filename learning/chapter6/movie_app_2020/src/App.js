import React, { Fragment } from 'react';
import axios from 'axios';

class App extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};

	getMovies = () => {
		const movies = axios.get('https://yts-proxy.now.sh/list_movies.json');
	}

	componentDidMount() {
		this.getMovies();
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
