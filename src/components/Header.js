import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
	align: center;
`;

const Header = (props) => {
	return (
		<>
			<Img
				src={'images/Images-Daily-Blog-Header.png'}
				alt='the images daily blog'
			/>
			<h3>
				Hello!! You've found a blog of daily images. This is a work in
				progress. Eventually we hope to share daily images from around th
				World Wide Web. For now, enjoy a daily image from the US National
				Aeronautics and Space Administration.
			</h3>
		</>
	);
};
export default Header;
