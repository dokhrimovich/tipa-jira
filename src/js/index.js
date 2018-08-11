import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import app from 'js/reducers/app';
import AppContainer from 'js/containers/appContainer';
import 'styles/main.scss';

ReactDOM.render(
	<Provider store={createStore(app)}>
		<Router>
			<AppContainer />
		</Router>
	</Provider>,
	document.getElementById('root')
);
