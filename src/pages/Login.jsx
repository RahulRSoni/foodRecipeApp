import React from 'react';
import { useState } from 'react';

function Log() {
	const [isSignUpActive, setIsSignUpActive] = useState(false);

	const handleSignUpClick = () => {
		setIsSignUpActive(true);
	};

	const handleSignInClick = () => {
		setIsSignUpActive(false);
	};

	return (
		<div className='bg-gray-100 flex justify-center items-center h-screen'>
			<div className='container mx-auto relative'>
				<div
					className={`form-container sign-up-container bg-white rounded-lg shadow-md absolute top-0 left-0 w-1/2 transition-transform duration-500 ease-in-out transform ${
						isSignUpActive ? 'right-panel-active' : ''
					}`}>
					<form
						action='#'
						className='flex flex-col items-center justify-center h-full'>
						<h1 className='font-bold mb-6'>Create Account</h1>
						<div className='social-container mb-6'>
							<a
								href='#'
								className='social mx-2'>
								<i className='material-icons'>facebook</i>
							</a>
							<a
								href='#'
								className='social mx-2'>
								<i className='material-icons'>google</i>
							</a>
							<a
								href='#'
								className='social mx-2'>
								<i className='material-icons'>linkedin</i>
							</a>
						</div>
						<span className='mb-4'>or use your email for registration</span>
						<input
							type='text'
							placeholder='Name'
							className='input mb-2'
						/>
						<input
							type='email'
							placeholder='Email'
							className='input mb-2'
						/>
						<input
							type='password'
							placeholder='Password'
							className='input mb-4'
						/>
						<button className='btn'>Sign Up</button>
					</form>
				</div>
				<div
					className={`form-container sign-in-container bg-white rounded-lg shadow-md absolute top-0 right-0 w-1/2 transition-transform duration-500 ease-in-out transform translate-x-full ${
						!isSignUpActive ? 'right-panel-active' : ''
					}`}>
					<form
						action='#'
						className='flex flex-col items-center justify-center h-full'>
						<h1 className='font-bold mb-6'>Sign in</h1>
						<div className='social-container mb-6'>
							<a
								href='#'
								className='social mx-2'>
								<i className='material-icons'>facebook</i>
							</a>
							<a
								href='#'
								className='social mx-2'>
								<i className='material-icons'>google</i>
							</a>
							<a
								href='#'
								className='social mx-2'>
								<i className='material-icons'>linkedin</i>
							</a>
						</div>
						<span className='mb-4'>or use your account</span>
						<input
							type='email'
							placeholder='Email'
							className='input mb-2'
						/>
						<input
							type='password'
							placeholder='Password'
							className='input mb-4'
						/>
						<a
							href='#'
							className='mb-2'>
							Forgot your password?
						</a>
						<button className='btn'>Sign In</button>
					</form>
				</div>
				<div className='overlay-container absolute top-0 right-0 w-1/2 h-full transform transition-transform duration-500 ease-in-out'>
					<div className='overlay bg-gradient-to-r from-red-500 to-pink-500 text-white absolute top-0 left-0 w-full h-full flex justify-center items-center'>
						<div className='overlay-panel w-1/2 text-center'>
							<h1 className='font-bold mb-6'>Welcome Back!</h1>
							<p className='mb-6'>
								To keep connected with us please login with your personal info
							</p>
							<button
								className='btn btn-white'
								onClick={handleSignInClick}>
								Sign In
							</button>
						</div>
						<div className='overlay-panel w-1/2 text-center'>
							<h1 className='font-bold mb-6'>Hello, Friend!</h1>
							<p className='mb-6'>
								Enter your personal details and start journey with us
							</p>
							<button
								className='btn btn-white'
								onClick={handleSignUpClick}>
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Log;
