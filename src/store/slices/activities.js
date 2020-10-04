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

const getAllActivities = () => {
	return async (dispatch) => {
		try {
			dispatch(actions.getActivities());
			const { results } = await [{}, {}];
			dispatch(actions.getActivitiesSuccess(results));
		} catch (error) {
			dispatch(actions.getActivitiesError(error));
		}
	};
};

export { activitiesReducer, getAllActivities };
