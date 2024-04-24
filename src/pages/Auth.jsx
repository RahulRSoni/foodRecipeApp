import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';
import '../Auth.css';
import { Button, Input, Typography } from '@material-tailwind/react';
import { Navbar2 } from '../components/Header/Header2.jsx';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
	registerWithEmailAndPassword,
	signInWithGoogle,
	logInWithEmailAndPassword,
} from '../api/auth.services.js';
import { useForm } from 'react-hook-form';
import {
	registerUser,
	registerUserFailure,
	registerUserSuccess,
} from '../Redux/users/userSlice.js';
import {
	signInFailure,
	signInStart,
	signInSuccess,
} from '../Redux/users/userSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function AuthPage() {
	const { loading, error } = useSelector((state) => state.user);

	//States
	const [isSignUpActive, setIsSignUpActive] = useState(false);
	const [errorMessage, setErrorMessage] = useState(''); // State to store the error message

	//variable Declaration
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { register, handleSubmit } = useForm({
		mode: 'onBlur',
	});

	const { register: register2, handleSubmit: handleSubmit2 } = useForm({
		mode: 'onBlur',
	});

	//toggle auth pages.
	const handleSignUpClick = () => {
		setIsSignUpActive(true);
	};

	const handleSignInClick = () => {
		setIsSignUpActive(false);
	};

	//form handle for user registration
	const createUser = async (data) => {
		try {
			dispatch(registerUser());
			const user = await registerWithEmailAndPassword(data);

			if (user) {
				dispatch(registerUserSuccess());
				handleSignInClick();
			}
		} catch (error) {
			toast.error('error.message');
			dispatch(registerUserFailure(error.message));
		}
	};

	//form handle for user authentication
	const logInUser = async (data) => {
		try {
			dispatch(signInStart());
			const user = await logInWithEmailAndPassword(data);

			if (user) {
				dispatch(signInSuccess(user));
				navigate('/');
			}
		} catch (error) {
			console.log(error.message);
			dispatch(signInFailure(error.message));
			const errorMessage = extractErrorMessage(error.message); // Extract error message
			setErrorMessage(errorMessage);
		}
	};

	const handleGoogleAuth = async () => {
		try {
			dispatch(signInStart());
			const user = await signInWithGoogle();

			if (user) {
				dispatch(signInSuccess(user));
				navigate('/');
			}
		} catch (error) {
			console.log(error.message);
			dispatch(signInFailure(error.message));
			const errorMessage = extractErrorMessage(error.message); // Extract error message
			setErrorMessage(errorMessage);
		}
	};

	// Function to extract error message starting with "Error" until <br> tag from HTML response
	const extractErrorMessage = (htmlResponse) => {
		const parser = new DOMParser();
		const doc = parser.parseFromString(htmlResponse, 'text/html');
		const errorMessage = doc.body.innerHTML.match(/Error.*?(?=<br>)/i); // Find text starting with "Error" until <br> tag
		return errorMessage ? errorMessage[0].trim() : ''; // Return extracted error message or empty string if not found
	};

	return (
		<>
			<div
				className='fixed inset-0 bg-cover bg-center bg-blur -z-50'
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')  `,
					filter: 'blur(2px) contrast(120%) brightness(50%)',
				}}></div>
			<div>
				<div className='w-full'>
					<Navbar2 />
				</div>
				<div className='flex justify-center items-center flex-col h-full mt-6 w-full px-2'>
					<div
						className={`container ${
							isSignUpActive ? 'right-panel-active' : ''
						}`}
						id='container'>
						<div className='form-container sign-up-container sm:w-[50%] w-full'>
							<form
								onSubmit={handleSubmit(createUser)}
								className='bg-white flex items-center justify-center flex-col px-12 h-full text-center w-full'>
								<Typography variant='h4'>Create Account</Typography>
								{/*for direct auth with other services */}
								<div className='flex justify-center items-center gap-4 py-2'>
									<Link
										href='#'
										className='rounded-full border-solid border-2 border-s-blue-gray-100 p-2'>
										<FaFacebook className='h-4 w-auto ' />
									</Link>
									<Link
										href='#'
										className='rounded-full border-solid border-2 border-s-blue-gray-100 p-2'>
										<FaGoogle
											className='h-4 w-auto '
											onClick={handleGoogleAuth}
										/>
									</Link>
									<Link
										href='#'
										className='rounded-full border-solid border-2 border-s-blue-gray-100 p-2'>
										<FaLinkedin className='h-4 w-auto ' />
									</Link>
								</div>
								<Typography
									color='gray'
									className='mt-1 font-thin text-xs'>
									Nice to meet you! Enter your details to register.
								</Typography>
								{/*for manual registration method*/}
								<div className='w-full flex flex-col gap-4 py-4'>
									<Input
										label='Full Name'
										type='text'
										{...register('displayName', {
											required: true,
											minLength: 4,
											maxLength: 40,
										})}
										minLength={4}
										maxLength={40}
										placeholder='Full Name'
										size='lg'
										required
									/>
									<Input
										label='Mobile'
										{...register('phoneNumber', {
											required: true,
											minLength: 10,
											maxLength: 10,
										})}
										minLength={10}
										maxLength={10}
										placeholder='Mobile'
										type='tel'
										size='lg'
										required
									/>
									<Input
										label='Email'
										type='email'
										{...register('email', {
											required: true,
											validate: {
												matchPattern: (value) =>
													/^\w+([.-]?\w+)+@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
														value,
													) || 'Email address must be a valid address',
											},
										})}
										placeholder='E-mail Address'
										size='lg'
										required
									/>
									<Input
										label='Password'
										size='lg'
										{...register('password', {
											required: true,
											minLength: 6,
											maxLength: 20,
										})}
										placeholder='Password'
										required
										type='password'
										minLength={6}
										maxLength={20}
									/>
								</div>
								<Button
									type='submit'
									className='bg-red-500 transition-all duration-800 ease-in rounded-full'>
									Sign Up
								</Button>
								<Typography
									color='gray'
									className='mt-4 text-center font-normal flex gap-2 items-center justify-center sm:hidden'>
									Already have an account?{' '}
									<Button
										variant='text'
										onClick={handleSignInClick}
										className='p-0'>
										Sign In
									</Button>
								</Typography>
								{error && (
									<Typography
										variant='lead'
										className='text-red-400 mt-1 font-semibold'>
										{error}
									</Typography>
								)}
								{errorMessage && (
									<Typography
										variant='lead'
										className='text-red-400 mt-1 font-semibold'>
										{errorMessage}
									</Typography>
								)}
							</form>
						</div>
						<div className='form-container sign-in-container sm:w-[50%] w-full'>
							<form
								onSubmit={handleSubmit2(logInUser)}
								className='bg-white flex items-center justify-center flex-col px-12 h-full text-center'>
								<Typography variant='h4'>Log In</Typography>

								{/*for direct auth with other services */}
								<div className='flex justify-center items-center gap-4 py-2'>
									<Link
										href='#'
										className='rounded-full border-solid border-2 border-s-blue-gray-100 p-2'>
										<FaFacebook className='h-4 w-auto ' />
									</Link>
									<Link
										href='#'
										className='rounded-full border-solid border-2 border-s-blue-gray-100 p-2'>
										<FaGoogle
											className='h-4 w-auto '
											onClick={handleGoogleAuth}
										/>
									</Link>
									<Link
										href='#'
										className='rounded-full border-solid border-2 border-s-blue-gray-100 p-2'>
										<FaLinkedin className='h-4 w-auto ' />
									</Link>
								</div>
								<Typography
									color='gray'
									className='mt-1 font-thin text-xs'>
									Nice to meet you! Enter your details to login.
								</Typography>

								{/*for login*/}
								<div className='w-full flex flex-col gap-4 py-4'>
									<Input
										label='Email'
										type='email'
										{...register2('email', {
											required: true,
											validate: {
												matchPattern: (value) =>
													/^\w+([.-]?\w+)+@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
														value,
													) || 'Email address must be a valid address',
											},
										})}
										placeholder='E-mail Address'
										size='lg'
										required
									/>
									<Input
										label='Password'
										size='lg'
										{...register2('password', {
											required: true,
										})}
										placeholder='Password'
										required
										type='password'
									/>
								</div>
								<Button
									type='submit'
									className='bg-red-500 transition-all duration-800 ease-in rounded-full'>
									Log In
								</Button>
								<Typography
									color='gray'
									className='sm:hidden mt-4 text-center font-normal flex gap-2 items-center justify-center'>
									If don't have an account?
									<Button
										variant='text'
										onClick={handleSignUpClick}
										className='p-0'>
										Sign Up
									</Button>
								</Typography>
								{error && (
									<Typography
										variant='lead'
										className='text-red-400 mt-1 font-semibold'>
										{error}
									</Typography>
								)}
								{errorMessage && (
									<Typography
										variant='lead'
										className='text-red-400 mt-1 font-semibold'>
										{errorMessage}
									</Typography>
								)}
							</form>
						</div>
						<div className='overlay-container hidden sm:block'>
							<div className='overlay'>
								<div className='absolute flex justify-center gap-4 items-center flex-col text-center px-10 h-full  sm:w-[50%] translate-x-0 transition-transform duration-700 ease-in-out overlay-left '>
									<Typography variant='h2'>Welcome Back!</Typography>
									<Typography variant='paragraph'>
										To keep connected with us please login with your personal
										info
									</Typography>
									<Button
										className='bg-white text-red-500 transition-all duration-800 ease-in rounded-full'
										onClick={handleSignInClick}
										id='signIn'>
										Log In
									</Button>
								</div>
								<div className='absolute flex justify-center gap-4 items-center flex-col text-center px-10 h-full  sm:w-[50%] translate-x-0 transition-transform duration-700 ease-in-out overlay-right'>
									<Typography variant='h2'>Hello, Friend!</Typography>
									<Typography variant='paragraph'>
										Enter your personal details and start journey with us
									</Typography>
									<Button
										className='bg-white text-red-500 transition-all duration-800 ease-in rounded-full'
										onClick={handleSignUpClick}
										id='signUp'>
										Sign Up
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AuthPage;
