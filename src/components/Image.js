import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Img = styled.img`
	width: 650px;
`;

const Image = () => {
	const [daily, setDaily] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.nasa.gov/planetary/apod?api_key=Rz30JyD2a2ysf2lhBMAwC9RgnPpsq0Jliv0jScXG'
			)
			.then((res) => {
				console.log(res.data);
				setDaily(res.data);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className='Image'>
			<h1>{daily.title}</h1>
			<h3>
				{daily.copyright} - {daily.date}
			</h3>
			<Img src={daily.url} alt='a daily NASA photograph' /> */}
		</div>
	);
};

export default Image;
