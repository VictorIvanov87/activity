import { combineReducers } from 'redux';
import { activitiesReducer } from './slices/activities';

export const rootReducer = combineReducers({
	activities: activitiesReducer,
});
