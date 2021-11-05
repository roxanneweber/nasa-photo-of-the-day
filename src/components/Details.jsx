import React from 'react';

const Details = (props) => {
	console.log(props);
	return (
		<>
			<div>
				<p>{props.daily.explanation}</p>
			</div>
		</>
	);
};
export default Details;
