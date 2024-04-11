import React from 'react';
import PostForm from '../components/PostForm/PostForm';

export default function AddPost() {
	return (
		<div className='py-8'>
			<div
				className='fixed inset-0 bg-cover bg-center bg-blur -z-50'
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1502741282025-a9c6a20aa697?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')  `,
					filter: 'blur(2px) contrast(120%) brightness(50%)',
				}}></div>
			<PostForm />
		</div>
	);
}
