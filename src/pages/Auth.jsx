import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';
import '../Auth.css';
import { Link } from 'react-router-dom';
import { Button, Input, Typography } from '@material-tailwind/react';

function AuthPage() {
	const [isSignUpActive, setIsSignUpActive] = useState(false);

	const handleSignUpClick = () => {
		setIsSignUpActive(true);
	};

	const handleSignInClick = () => {
		setIsSignUpActive(false);
	};

	return (
		<div className='flex justify-center items-center flex-col h-full mt-24'>
			<div
				className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}
				id='container'>
				<div className='form-container sign-up-container'>
					<form
						action='#'
						className='bg-white flex items-center justify-center flex-col px-12 h-full text-center'>
						<Typography variant='h4'>Create Account</Typography>
						<div className='flex justify-center items-center gap-4 py-2'>
							<Link
								href='#'
								className='rounded-full border-solid border-2 border-s-blue-gray-100 p-2'>
								<FaFacebook className='h-4 w-auto ' />
							</Link>
							<Link
								href='#'
								className='rounded-full border-solid border-2 border-s-blue-gray-100 p-2'>
								<FaGoogle className='h-4 w-auto ' />
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

						<div className='w-full flex flex-col gap-4 py-4'>
							<Input
								label='Full Name'
								size='lg'
								required
							/>
							<Input
								label='Mobile'
								size='lg'
								required
							/>
							<Input
								label='Email'
								size='lg'
								required
							/>
							<Input
								label='Password'
								size='lg'
								required
								type='password'
							/>
						</div>
						<Button className='bg-red-500 transition-all duration-800 ease-in rounded-full'>
							Sign Up
						</Button>
					</form>
				</div>
				<div className='form-container sign-in-container'>
					<form
						action='#'
						className='bg-white flex items-center justify-center flex-col px-12 h-full text-center'>
						<Typography variant='h4'>Log In</Typography>
						<div className='flex justify-center items-center gap-4 py-2'>
							<Link
								href='#'
								className='rounded-full border-solid border-2 border-s-blue-gray-100 p-2'>
								<FaFacebook className='h-4 w-auto ' />
							</Link>
							<Link
								href='#'
								className='rounded-full border-solid border-2 border-s-blue-gray-100 p-2'>
								<FaGoogle className='h-4 w-auto ' />
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

						<div className='w-full flex flex-col gap-4 py-4'>
							<Input
								label='Email'
								size='lg'
								required
							/>
							<Input
								label='Password'
								size='lg'
								required
								type='password'
							/>
						</div>
						<Button className='bg-red-500 transition-all duration-800 ease-in rounded-full'>
							Log In
						</Button>
					</form>
				</div>
				<div className='overlay-container'>
					<div className='overlay'>
						<div className='absolute flex justify-center gap-4 items-center flex-col text-center px-10 h-full  w-[50%] translate-x-0 transition-transform duration-700 ease-in-out overlay-left '>
							<Typography variant='h2'>Welcome Back!</Typography>
							<Typography variant='paragraph'>
								To keep connected with us please login with your personal info
							</Typography>
							<Button
								className='bg-white text-red-500 transition-all duration-800 ease-in rounded-full'
								onClick={handleSignInClick}
								id='signIn'>
								Log In
							</Button>
						</div>
						<div className='absolute flex justify-center gap-4 items-center flex-col text-center px-10 h-full  w-[50%] translate-x-0 transition-transform duration-700 ease-in-out overlay-right'>
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
	);
}

export default AuthPage;
