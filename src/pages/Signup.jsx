import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from 'react-material-tailwind';
import 'material-tailwind/dist/tailwind.css';

const SignUpPage = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		console.log(data); // Here you can handle form submission
	};

	return (
		<div className='min-h-screen bg-gray-100 flex justify-center items-center'>
			<div className='bg-white p-8 rounded shadow-md max-w-md w-full'>
				<h2 className='text-2xl font-semibold mb-4'>Sign Up</h2>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='mb-4'>
						<TextField
							type='text'
							label='Name'
							{...register('name', { required: true })}
							error={errors.name && 'Name is required'}
							fullWidth
						/>
					</div>
					<div className='mb-4'>
						<TextField
							type='email'
							label='Email'
							{...register('email', { required: true })}
							error={errors.email && 'Email is required'}
							fullWidth
						/>
					</div>
					<div className='mb-4'>
						<TextField
							type='tel'
							label='Mobile'
							{...register('mobile', { required: true })}
							error={errors.mobile && 'Mobile is required'}
							fullWidth
						/>
					</div>
					<div className='mb-4'>
						<TextField
							type='password'
							label='Password'
							{...register('password', { required: true })}
							error={errors.password && 'Password is required'}
							fullWidth
						/>
					</div>
					<div className='mb-4'>
						<TextField
							type='file'
							label='Avatar'
							{...register('avatar', { required: true })}
							error={errors.avatar && 'Avatar is required'}
							fullWidth
						/>
					</div>
					<div className='mt-6'>
						<Button
							color='blue'
							buttonType='filled'
							size='lg'
							block
							type='submit'>
							Sign Up
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUpPage;
