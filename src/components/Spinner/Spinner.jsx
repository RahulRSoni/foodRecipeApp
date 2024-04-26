import React from 'react';

function Spinner() {
	return (
		<div>
			<div>
				<img
					src='/public/Spinner.gif'
					alt='Loading'
					className='h-10 w-auto'
				/>
			</div>
		</div>
	);
}

export default Spinner;
