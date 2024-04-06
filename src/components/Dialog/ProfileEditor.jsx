import React from 'react';
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Input,
} from '@material-tailwind/react';

export function ProfileEditor() {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(!open);

	return (
		<>
			<Button
				onClick={handleOpen}
				variant='gradient'
				color='green'
				className='my-4'>
				Update profile
			</Button>
			<Dialog
				open={open}
				handler={handleOpen}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 },
				}}>
				<DialogHeader>Update your self.</DialogHeader>
				<DialogBody>
					<div className='text-gray-700'>
						<div className='grid md:grid-cols-2 text-sm'>
							<div className='grid grid-cols-1 p-5'>
								<Input
									variant='static'
									label='First Name'
									placeholder='Jhone'
								/>
							</div>
							<div className='grid grid-cols-1 p-5'>
								<Input
									variant='static'
									label='Last Name'
									placeholder='Doe'
								/>
							</div>
							<div className='grid grid-cols-1 p-5'>
								<Input
									variant='static'
									label='Contact No.'
									placeholder='+91 9806331218'
								/>
							</div>

							<div className='grid grid-cols-1 p-5'>
								<Input
									variant='static'
									label='Email'
									placeholder='abc@gamil.com'
									disabled
								/>
							</div>
			
							<div className='grid grid-cols-2 p-2x'>
								<div className='px-4 py-2 font-semibold'>News Latter</div>

								{false ? (
									<div className='px-4 py-2 text-green-700 font-bold'>
										Subscribed
									</div>
								) : (
									<div className='px-4 py-2 text-red-700 font-bold'>
										Not Subscribe
									</div>
								)}
							</div>
						</div>
					</div>
				</DialogBody>
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
						<span>Confirm</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
}
