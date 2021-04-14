import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	isLoading: false,
	error: false,
};

const { reducer: activitiesReducer, actions } = createSlice({
	name: 'activities',
	initialState,
	reducers: {
		getActivities: (state, action) => {
			state.isLoading = true;
		},
		getActivitiesSuccess: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
			state.error = null;
		},
		getActivitiesError: (state, action) => {
			state.isLoading = false;
			state.data = null;
			state.error = action.payload;
		},
	},
});

// const getAllActivities = () => {
// 	return (dispatch) => {
// 		try {
// 			dispatch(actions.getActivities());
// 			dispatch(actions.getActivitiesSuccess(activitiesMock));
// 		} catch (error) {
// 			dispatch(actions.getActivitiesError(error));
// 		}
// 	};
// };

const getAllActivities = (res) => {
	return (dispatch) => {
		dispatch(actions.getActivitiesSuccess(res));
	};
};

export { activitiesReducer, getAllActivities };
