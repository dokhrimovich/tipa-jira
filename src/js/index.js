import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers/app';
import AppContainer from './containers/appContainer';
import '../styles/main.scss';

ReactDOM.render(
	<Provider store={createStore(app)}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
);
