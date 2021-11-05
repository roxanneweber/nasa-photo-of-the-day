import React from 'react';

import Header from './components/Header';
import Image from './components/Image';
//import Images from './components/Images/Images';

function App() {
	return (
		<div className='text-center'>
			<div className='Header'>
				<Header />
			</div>
			<div className='Images'>
				<Image />
			</div>
		</div>
	);
}

export default App;
