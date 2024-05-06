import React from 'react';
import {
	Typography,
	Button,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Avatar,
} from '@material-tailwind/react';
import {
	UserCircleIcon,
	ChevronDownIcon,
	InboxArrowDownIcon,
	LifebuoyIcon,
	PowerIcon,
} from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../api/auth.services.js';
import { sigOutSuccess } from '../../Redux/users/userSlice.js';
import { useDispatch, useSelector } from 'react-redux';

// profile menu component
const profileMenuItems = [
	{
		label: 'My Profile',
		icon: UserCircleIcon,
		path: '/profile',
	},
	{
		label: 'Add Recipes',
		icon: InboxArrowDownIcon,
		path: '/recipe/addPost',
	},
	{
		label: 'Help',
		icon: LifebuoyIcon,
		path: '/contact',
	},
];

export default function ProfileMenu() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const { currentUser } = useSelector((state) => state.user);

	const handleLogOut = () => {
		logout();
		dispatch(sigOutSuccess());
		navigate('/auth');
	};

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Menu
			open={isMenuOpen}
			handler={setIsMenuOpen}
			placement='bottom-end'>
			<MenuHandler>
				<Button
					variant='text'
					color='blue-gray'
					className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'>
					<Avatar
						variant='circular'
						size='sm'
						alt={currentUser.displayName || ''}
						className='border border-gray-900 p-0.5'
						src={currentUser.photoURL || ''}
					/>
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`h-3 w-3 transition-transform ${
							isMenuOpen ? 'rotate-180' : ''
						}`}
					/>
				</Button>
			</MenuHandler>
			<MenuList className='p-1'>
				{profileMenuItems.map(({ path, label, icon }, index) => {
					return (
						<MenuItem
							key={label}
							onClick={closeMenu}
							className={`flex items-center gap-2 rounded `}>
							{React.createElement(icon, {
								className: `h-4 w-4 `,
								strokeWidth: 2,
							})}
							<Typography
								variant='small'
								className='font-normal'
								color='inherit'>
								<Link to={`${path}`}>{label}</Link>
							</Typography>
						</MenuItem>
					);
				})}
				<MenuItem
					onClick={closeMenu}
					className='flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'>
					{React.createElement(PowerIcon, {
						className: `h-4 w-4 `,
						strokeWidth: 2,
					})}
					<Typography
						variant='small'
						className='font-normal'
						onClick={handleLogOut}
						color='red'>
						Sign out
					</Typography>
				</MenuItem>
			</MenuList>
		</Menu>
	);
}
