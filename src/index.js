/*
USED TO RENDER MAIN APP COMPONENT
INTO HTML INDEX FILE.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// STORE
// import { store } from '@store';

// COMPONENTS
import App from './App';

// USING STORE
// ReactDOM.render(
// 	<Provider store={store}>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</Provider>,
// 	document.getElementById('app')
// );

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app')
);
