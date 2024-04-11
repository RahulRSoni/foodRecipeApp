import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
	About,
	Contact,
	Courses,
	Error,
	Faq,
	RecipeIndex,
	Home,
	AuthPage,
	Profile,
	RecipePage,
	AddPost,
} from './Pages/Page.jsx';

const router = createBrowserRouter([
	{
		path: '/auth',
		element: <AuthPage />,
		errorElement: <Error />,
	},

	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
				errorElement: <Error />,
			},
			{
				path: '/recipe:bake',
				element: <RecipePage />,
				errorElement: <Error />,
			},
			{
				path: '/addPost',
				element: <AddPost />,
				errorElement: <Error />,
			},
			{
				path: '/about',
				element: <About />,
				errorElement: <Error />,
			},
			{
				path: '/contact',
				element: <Contact />,
				errorElement: <Error />,
			},
			{
				path: '/courses',
				element: <Courses />,
				errorElement: <Error />,
			},
			{
				path: '/faq',
				element: <Faq />,
				errorElement: <Error />,
			},
			{
				path: '/recipe',
				element: <RecipeIndex />,
				errorElement: <Error />,
			},
			{
				path: '/profile',
				element: <Profile />,
				errorElement: <Error />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>,
);
