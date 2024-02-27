import React from 'react';

function AboutCard() {
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<div className='border '>
				<img
					className='h-96 w-96 rounded-full object-cover object-center p-4'
					src='https://images.unsplash.com/photo-1708860219707-f9e981be62c5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='nature image'
				/>
			</div>
			<div>
				<h2></h2>
				<p></p>
			</div>
			<div></div>
			<div></div>
		</div>
	);
}

export default AboutCard;
