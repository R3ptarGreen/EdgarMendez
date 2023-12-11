import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { NextUIProvider } from '@nextui-org/react';
import AppRouter from './router/AppRouter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NextUIProvider>
			<main className='purple-dark text-foreground bg-background min-h-screen font-primary'>
				<AppRouter />
			</main>
		</NextUIProvider>
	</React.StrictMode>,
);
