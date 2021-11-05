import React from 'react';
import styled from 'styled-components';


const Image = (props) => {
	return (
		<>

<img src={props.daily.url} alt='NASA daily' />

		</>
	);
};
export default Image;