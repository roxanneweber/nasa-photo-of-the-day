import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	background-color: #94775d;
	height: 200px;
`;
const Header = () => {
	return (
		<>
			<Section>
				<div class='container'>
					<div class='text'></div>
				</div>
			</Section>
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
