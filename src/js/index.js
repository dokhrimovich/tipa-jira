import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers/app';
import App from './components/app';
import '../styles/main.scss';

ReactDOM.render(
	<Provider store={createStore(app)}>
		<App />
	</Provider>,
	document.getElementById('root')
);
