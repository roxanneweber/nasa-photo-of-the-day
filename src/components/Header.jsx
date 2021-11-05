import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2`
	align-text: center;
	font-weight: bold;
	font-family: Helvetica;
	color: blue;
`;

const Header = (props) => {
	return (
		<>
			<h1>NASA Photo of the Day</h1>
			<H2>Image Title: {props.daily.title}</H2>
			<h3>
				Image Credits:
				{props.daily.copyright}, {props.daily.date}
			</h3>
		</>
	);
};
export default Header;
