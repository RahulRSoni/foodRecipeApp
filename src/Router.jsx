import {
	About,
	Contact,
	Error,
	Faq,
	RecipeIndex,
	Home,
	AuthPage,
	Profile,
	RecipePage,
	AddPost,
} from './Pages/Page.jsx';
import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';

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
				index: true,
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

export default router;
