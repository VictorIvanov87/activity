import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { createStore } from './store';

const store = createStore();

const renderApp = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
};

if (module.hot) {
	module.hot.accept('./App', renderApp);
}

renderApp();
