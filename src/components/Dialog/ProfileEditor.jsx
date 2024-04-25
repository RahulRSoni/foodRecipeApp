import React, { useRef } from 'react';
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Input,
	Typography,
	Tooltip,
	Textarea,
	IconButton,
	avatar,
} from '@material-tailwind/react';

import { FcUpload, FcHighPriority, FcApproval } from 'react-icons/fc';
import { storeImages } from '../../api/store.services';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export function ProfileEditor({ user }) {
	const { displayName, phoneNumber, email, photoURL, about } = user[0];
	const [open, setOpen] = React.useState(false);
	const [image, setImage] = React.useState({});
	const [imageUploadError, setImageUploadError] = React.useState(false);
	const [file, setFile] = React.useState({});
	const [imageUploadPercentage, setImageUploadPercentage] = React.useState('');

	console.log(file, imageUploadPercentage);

	const { register, handleSubmit, watch, setValue, control, reset } = useForm({
		defaultValues: {
			photoURL: photoURL || '',
			displayName: displayName || '',
			phoneNumber: phoneNumber || '',
			email: email || '',
			about: about || '',
		},
	});

	const fileInputRef = useRef(null);

	React.useEffect(() => {
		if (image) {
			handleFileUpload(image);
		}
	}, [image]);

	const handleFileUpload = (image) => {
		const progressCallback = (progress) => {
			setImageUploadPercentage(progress);
		};

		// Assuming storeImages is a function to upload the image
		storeImages(image, progressCallback)
			.then((url) => {
				setFile({ imageURL: url }); // Update the file state with the uploaded image URL
				setImageUploadError(false); // Clear any previous upload errors
				alert('Image upload successfully!!!');
			})
			.catch((error) => {
				setImageUploadError(true, error); // Set upload error message
			});
	};

	const handleOpen = () => setOpen(!open);

	return (
		<>
			<Tooltip
				content={
					<Typography
						color='blue-gray'
						className='text-xs'>
						Update Profile
					</Typography>
				}
				className='bg-white shadow-xl shadow-black/10 '
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0, y: 25 },
				}}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='currentColor'
					onClick={handleOpen}
					className='w-auto h-5 text-green-500'>
					<path d='m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z' />
					<path d='M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z' />
				</svg>
			</Tooltip>
			<Dialog
				open={open}
				handler={handleOpen}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}>
				<DialogHeader>Update your self.</DialogHeader>
				<div>
					<div className='text-gray-700'>
						<div className='flex flex-col gap-6 text-sm'>
							<div className='flex flex-col justify-center items-center gap-3'>
								<img
									className='h-36 p-1 border-dotted border-2 border-gray-500 rounded-md w-36 relative object-cover'
									src={file.imageURL || photoURL} // Use file state to display the uploaded image
									onClick={() => fileInputRef.current.click()}
									alt=''
								/>
								{/* Progress bar overlay */}
								{imageUploadPercentage > 0 && (
									<div className='w-full h-full flex items-center justify-center'>
										<div className='w-36 bg-gray-300 h-2'>
											<div
												className='bg-blue-500 h-full'
												style={{ width: `${imageUploadPercentage}%` }}></div>
										</div>
									</div>
								)}
								<input
									type='file'
									ref={fileInputRef}
									accept='image/png, image/jpg, image/jpeg, image/gif'
									onChange={(e) => setImage(e.target.files[0])}
									className='hidden'
								/>
							</div>
							<div className='grid grid-cols-2 gap-2 '>
								<div className='grid grid-cols-1 px-5'>
									<Input
										variant='standard'
										label='Full Name'
										name='displayName'
										{...register('displayName', { required: true })}
									/>
								</div>

								<div className='grid grid-cols-1 px-5'>
									<Input
										variant='standard'
										label='Contact No.'
										name='phoneNumber'
										{...register('phoneNumber', { required: true })}
									/>
								</div>
							</div>

							<div className='grid grid-cols-1 px-5'>
								<Input
									variant='standard'
									label='Email'
									name='email'
									{...register('email', { required: true })}
									disabled
								/>
							</div>
							<div className='grid grid-cols-1 px-5'>
								<Textarea
									variant='standard'
									label='About Myself'
									name='about'
									{...register('about', { required: true })}
								/>
							</div>
						</div>
					</div>
				</div>
				<DialogFooter>
					<Button
						variant='text'
						color='red'
						onClick={handleOpen}
						className='mr-1'>
						<span>Cancel</span>
					</Button>
					<Button
						variant='gradient'
						color='green'
						onClick={handleOpen}>
						<span>Update</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}
