import React from 'react';

function Spinner() {
	return (
		<div className='h-full flex justify-center items-center bg-transparent '>
			<img
				src='/public/Spinner.svg'
				alt='Loading'
				className='h-full w-auto object-cover bg-transparent'
			/>
		</div>
	);
}

export default Spinner;
