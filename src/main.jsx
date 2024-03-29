import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from '@material-tailwind/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutCard from './components/Card/AboutCard.jsx';
import {
	About,
	Contact,
	Courses,
	Error,
	Faq,
	RecipeIndex,
	SignUpPage,
	Home,
	SignInPage,
	AuthPage,
} from './pages/Pages.jsx';

const router = createBrowserRouter([
	{
		path: '/about-card',
		element: <AboutCard />,
	},
	{
		path: '/log',
		element: <AuthPage />,
		errorElement: <Error />,
	},
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
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
				path: '/signup',
				element: <SignUpPage />,
				errorElement: <Error />,
			},
			{
				path: '/signin',
				element: <SignInPage />,
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
