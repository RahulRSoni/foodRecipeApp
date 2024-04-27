import React from 'react';

function Spinner() {
	return (
		<div className='flex justify-center items-center bg-transparent bg-opacity-10 min-h-screen'>
			<img
				src='/public/Spinner.gif'
				alt='Loading'
				className='h-40 w-auto object-cover'
			/>
		</div>
	);
}

export default Spinner;
