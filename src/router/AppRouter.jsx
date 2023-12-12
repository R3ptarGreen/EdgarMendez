import { HomePage, BiographyPage, ProjectsPage } from '../pages/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';

const AppRouter = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			children: [
				{ path: '/', element: <HomePage /> },
				{ path: '/biography', element: <BiographyPage /> },
				{ path: '/projects', element: <ProjectsPage /> },
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRouter;
