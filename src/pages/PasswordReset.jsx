import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';
import '../Auth.css';
import { Button, Input, Typography } from '@material-tailwind/react';
import { Navbar2 } from '../components/Header/Header2.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { sendPasswordReset, signInWithGoogle } from '../api/auth.services.js';
import { useForm } from 'react-hook-form';

function PasswordReset() {
	//variable Declaration
	const navigate = useNavigate();

	const { register, handleSubmit } = useForm({
		mode: 'onBlur',
	});

	const handleSignInClick = () => {
		navigate('/auth');
	};

	const handlePasswordReset = async (data) => {
		try {
			await sendPasswordReset(data);

			navigate('/auth');
			toast.info('Send reset password link on your email id');
		} catch (error) {
			toast.error('error.message');
			setErrorMessage(error.message);
		}
	};

	return (
		<div className='w-full h-full'>
			<div
				className='fixed inset-0 bg-cover bg-center bg-blur -z-50'
				style={{
					backgroundImage: `url('https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')  `,
					filter: 'blur(2px) contrast(120%) brightness(50%)',
				}}></div>

			<div className='w-full'>
				<Navbar2 />
			</div>
			<div className='flex justify-center items-center  mt-6 w-full p-2 h-full '>
				<form
					onSubmit={handleSubmit(handlePasswordReset)}
					className='bg-white flex items-center justify-center flex-col p-12 h-full text-center w-[35rem] rounded-lg'>
					<Typography variant='h4'>Reset Password</Typography>

					<Typography
						color='gray'
						className='mt-1 font-thin text-xs '>
						<span className='text-red-600 text-sm font-semibold'>Oops!!,</span>{' '}
						On issue please submit Email Address for reset password.
					</Typography>

					{/*for login*/}
					<div className='w-full flex flex-col gap-4 py-4'>
						<Input
							label='Email'
							type='email'
							{...register('email', {
								required: true,
								validate: {
									matchPattern: (value) =>
										/^\w+([.-]?\w+)+@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
										'Email address must be a valid address',
								},
							})}
							placeholder='E-mail Address'
							size='lg'
							required
						/>
					</div>
					<div className='flex  w-full'>
						<Typography
							color='gray'
							className=' text-center font-normal flex gap-2 items-center justify-center'>
							If you don't reset password?
							<Button
								variant='text'
								onClick={handleSignInClick}
								className='p-0 text-blue-gray-500'>
								Sign In
							</Button>
						</Typography>
					</div>
					<Button
						type='submit'
						className='bg-red-500 transition-all duration-800 ease-in rounded-full my-4'>
						Send Mail
					</Button>
				</form>
			</div>
		</div>
	);
}

export default PasswordReset;
