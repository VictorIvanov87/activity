import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

const createStore = () => {
	const store = configureStore({ reducer: rootReducer });

	if (process.env.NODE_ENV !== 'production' && module.hot) {
		module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
	}

	return store;
};

export { createStore };
