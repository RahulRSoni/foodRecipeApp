// src/LazyContent.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const LazyContent = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default LazyContent;
