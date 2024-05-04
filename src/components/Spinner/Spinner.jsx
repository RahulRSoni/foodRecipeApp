import React from 'react';

function Spinner() {
	return (
		<div className='h-full flex justify-center items-center bg-transparent bg-opacity-10 '>
			<img
				src='/public/Spinner.svg'
				alt='Loading'
				className='h-full w-auto object-cover'
			/>
		</div>
	);
}

export default Spinner;
