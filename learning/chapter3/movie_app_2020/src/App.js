import React from 'react';

function Food(props) {
	let { fav } = props;
	return <h3>I like {fav}</h3>;
}

function App() {
	return (
		<div>
			<h1>hello!!!!!</h1>
			<Food fav="kimchi" />
			<Food fav="ramen" />
			<Food fav="samgiopasl" />
			<Food fav="chukumi" />
		</div>
	);
}

export default App;
