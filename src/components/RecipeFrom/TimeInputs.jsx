import { Input } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';

const TimeInputs = ({ control, register }) => {
	const [totalTime, setTotalTime] = useState('00:00');

	const calculateTotalTime = () => {
		const preparingTime =
			document.querySelector('input[name="preparingTime"]')?.value || '00:00';
		const cockingTime =
			document.querySelector('input[name="cockingTime"]')?.value || '00:00';
		const restingTime =
			document.querySelector('input[name="restingTime"]')?.value || '00:00';
		const bakingTime =
			document.querySelector('input[name="bakingTime"]')?.value || '00:00';

		const [preparingHours, preparingMinutes] = preparingTime.split(':');
		const [cockingHours, cockingMinutes] = cockingTime.split(':');
		const [restingHours, restingMinutes] = restingTime.split(':');
		const [bakingHours, bakingMinutes] = bakingTime.split(':');

		const totalMinutes =
			parseInt(preparingMinutes) +
			parseInt(cockingMinutes) +
			parseInt(restingMinutes) +
			parseInt(bakingMinutes);
		const totalHours =
			parseInt(preparingHours) +
			parseInt(cockingHours) +
			parseInt(restingHours) +
			parseInt(bakingHours) +
			Math.floor(totalMinutes / 60);

		const hours = totalHours.toString().padStart(2, '0');
		const minutes = (totalMinutes % 60).toString().padStart(2, '0');

		setTotalTime(`${hours}:${minutes}`);
	};

	useEffect(() => {
		calculateTotalTime();

		const timeInputs = document.querySelectorAll('input[type="time"]');
		timeInputs.forEach((input) => {
			input.addEventListener('change', calculateTotalTime);
		});

		return () => {
			timeInputs.forEach((input) => {
				input.removeEventListener('change', calculateTotalTime);
			});
		};
	}, [totalTime]);

	return (
		<div className='flex flex-col gap-2 w-full'>
			<div className='flex flex-wrap gap-2 w-full'>
				<div>
					<Input
						label='Preparing Time :'
						type='time'
						size='md'
						placeholder='How much time to prepare.'
						name='preparingTime'
						step={1}
						pattern='^([01]\d|2[0-3]):([0-5]\d)$'
						{...register('preparingTime', { required: true })}
					/>
				</div>
				<div>
					<Input
						label='Coke Time :' // Assuming this is a typo for "Cooking Time"
						type='time'
						size='md'
						placeholder='How much time to cooking.'
						name='cockingTime'
						step={1}
						pattern='^([01]\d|2[0-3]):([0-5]\d)$'
						{...register('cockingTime', { required: true })}
					/>
				</div>
				<div>
					<Input
						label='Resting Time :'
						size='md'
						type='time'
						placeholder='How much time to resting.'
						name='restingTime'
						step={1}
						pattern='^([01]\d|2[0-3]):([0-5]\d)$'
						{...register('restingTime', { required: true })}
					/>
				</div>
				<div>
					<Input
						label='Baking time :'
						size='md'
						type='time'
						placeholder='Total time for preparing.'
						name='bakingTime'
						step={1}
						pattern='^([01]\d|2[0-3]):([0-5]\d)$'
						{...register('bakingTime', { required: true })}
					/>
				</div>
			</div>

			<div className='flex flex-wrap gap-2 w-full'>
				<div>
					<Input
						label='Total time :'
						size='md'
						placeholder='Total time for preparing.'
						name='totalTime'
						value={totalTime}
						{...register('totalTime')}
					/>
				</div>
				<div>
					<Input
						label='Serving for	'
						size='md'
						type='number'
						placeholder='Total time for preparing.'
						name='serving'
						{...register('serving')}
					/>
				</div>
			</div>
		</div>
	);
};

export default TimeInputs;
