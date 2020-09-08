import React, { Fragment } from 'react';
import axios from 'axios';

class App extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};

	getMovies = async() => {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get('https://yts-proxy.now.sh/list_movies.json');

		this.setState({ movies, isLoading: false });
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
