import { combineReducers } from 'redux';
import { activitiesReducer } from './slices/activities';
import { currentUserReducer } from './slices/currentUser';

export const rootReducer = combineReducers({
	currentUser: currentUserReducer,
	activities: activitiesReducer,
});
