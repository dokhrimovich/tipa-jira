import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'js/components/app';
import appReducer from 'js/reducers/appReducer';
import 'styles/main.scss';

ReactDOM.render(
	<Provider store={createStore(appReducer)}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
