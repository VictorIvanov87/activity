import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: null,
	isLoading: false,
	error: false,
};

const { reducer: currentUserReducer, actions } = createSlice({
	name: 'currentUser',
	initialState,
	reducers: {
		setCurrentUserSuccess: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
			state.error = null;
		},
		setCurrentUserError: (state, action) => {
			state.isLoading = false;
			state.data = null;
			state.error = action.payload;
		},
	},
});

const setCurrentUserSuccess = (res) => {
	return (dispatch) => {
		dispatch(actions.setCurrentUserSuccess(res));
	};
};

const setCurrentUserError = (res) => {
	return (dispatch) => {
		dispatch(actions.setCurrentUserError(res));
	};
};

export {
	currentUserReducer,
	setCurrentUserSuccess,
	setCurrentUserError,
};
