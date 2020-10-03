import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';

const middlewares = [thunkMiddleware];
const storeEnchancers = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(rootReducer, storeEnchancers);

export { store };
