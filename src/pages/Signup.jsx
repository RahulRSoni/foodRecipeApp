import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button } from '@material-tailwind/react';

const SignUpPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data); // Here you can handle form submission
	};

	return (
		<div className='min-h-screen bg-gray-100 flex justify-center items-center p-[10%]'>
			<div
				data-dialog-backdrop='animated-dialog'
				data-dialog-backdrop-close='true'
				className='pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300'>
				<div
					data-dialog='animated-dialog'
					data-dialog-mount='opacity-100 translate-y-0 scale-100'
					data-dialog-unmount='opacity-0 -translate-y-28 scale-90 pointer-events-none'
					data-dialog-transition='transition-all duration-300'
					className='relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl'>
					<div className='flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900'>
						Its a simple dialog.
					</div>
					<div className='bg-white p-8 rounded shadow-md max-w-md w-full'>
						<h2 className='text-2xl font-semibold mb-4'>Sign Up</h2>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='mb-4'>
								<Input
									type='text'
									variant='standard'
									label='Name'
									{...register('name', { required: true })}
									error={errors.name && 'Name is required'}
								/>
							</div>
							<div className='mb-4'>
								<Input
									type='email'
									variant='standard'
									label='Email'
									{...register('email', { required: true })}
									error={errors.email && 'Email is required'}
								/>
							</div>
							<div className='mb-4'>
								<Input
									type='tel'
									variant='standard'
									label='Mobile'
									{...register('mobile', { required: true })}
									error={errors.mobile && 'Mobile is required'}
								/>
							</div>
							<div className='mb-4'>
								<Input
									type='password'
									variant='standard'
									label='Password'
									{...register('password', { required: true })}
									error={errors.password && 'Password is required'}
								/>
							</div>
							<div className='mb-4'>
								<Input
									type='file'
									label='Avatar'
									variant='standard'
									{...register('avatar', { required: true })}
									error={errors.avatar && 'Avatar is required'}
								/>
							</div>
							<div className='mt-6'>
								<Button
									color='blue'
									size='lg'
									type='submit'>
									Sign Up
								</Button>
							</div>
						</form>
					</div>
				</div>
				<div className='flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500'>
					<button
						data-ripple-dark='true'
						data-dialog-close='true'
						className='px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
						Cancel
					</button>
					<button
						data-ripple-light='true'
						data-dialog-close='true'
						className='middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'>
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
