import React from 'react';
import { logout } from '../api/auth.services.js';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
	const navigate = useNavigate();

	const handleClink = () => {
		logout();
		navigate('/');
	};
	return (
		<>
			<button onClick={handleClink}></button>
		</>
	);
}
