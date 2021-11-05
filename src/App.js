import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header.jsx';
import Details from './components/Details.jsx';
import Image from './components/Image.jsx';

function App() {
	const [daily, setDaily] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.nasa.gov/planetary/apod?api_key=Rz30JyD2a2ysf2lhBMAwC9RgnPpsq0Jliv0jScXG'
			)
			.then((res) => {
				//console.log(res.data);
				setDaily(res.data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className='App'>
			<Header daily={daily} />
			<Details daily={daily} />
			<Image daily={daily} />
		</div>
	);
}

export default App;
