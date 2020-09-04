import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
	return (
		<Fragment>
			<h2>I like {name}</h2>
			<h3>{rating}/5.0</h3>
			<img src={picture} width="320" alt={name} />
		</Fragment>
	);
}

const foodILike = [
	{
		id: 1,
		name: 'Kimchi',
		image: 'https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg',
		rating: 5.0,
	},
	{
		id: 2,
		name: 'Samgyeopsal',
		image: 'https://i.ytimg.com/vi/IsEVv1Jt2Ro/maxresdefault.jpg',
		rating: 4.9,
	},
	{
		id: 3,
		name: 'Bibimbap',
		image: 'http://www.koreadailyus.com/wp-content/uploads/2016/01/vegetarian-bibimpbap.jpg',
		rating: 2.3,
	},
	{
		id: 4,
		name: 'Doncasu',
		image: 'http://freshdon.com/wp-content/uploads/2018/06/%EB%B6%88%EA%B0%88%EB%B9%84%EB%8F%88%EA%B9%8C%EC%8A%A4%EB%A9%94%EC%9D%B82.jpg',
		rating: 1.1,
	},
	{
		id: 5,
		name: 'Kimbap',
		image: 'https://i.ytimg.com/vi/jjO7GLgvnck/maxresdefault.jpg',
		rating: 3.7,
	}
];

// function renderFood(dish) {
// 	return <Food name={dish.name} picture={dish.image} />;
// }

// const renderFood = dish => (
// 	<Food name={dish.name} picture={dish.image} />
// );

function App() {
	// console.log(foodILike.map(renderFood));
	return (
		<div>
			{foodILike.map( dish => (
				<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
			))}
		</div>
	);
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	picture: PropTypes.string.isRequired,
	rating: PropTypes.number,
}

export default App;
