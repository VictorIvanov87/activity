const GET_ACTIVITIES = 'GET_ACTIVITIES';
const GET_ACTIVITIES_SUCCESS = 'GET_ACTIVITIES_SUCCESS';
const GET_ACTIVITIES_ERROR = 'GET_ACTIVITIES_ERROR';

const initialState = {
	data: [],
	isLoading: false,
	error: false,
};

// Reducers
const activitiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ACTIVITIES:
			return { ...state, isLoading: true };
		case GET_ACTIVITIES_SUCCESS:
			return { ...state, isLoading: false, data: action.payload };
		case GET_ACTIVITIES_ERROR:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

// Actions
const getActivities = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: GET_ACTIVITIES });
			const { results } = await [{}, {}];
			dispatch({ type: GET_ACTIVITIES_SUCCESS, payload: results });
		} catch (error) {
			dispatch({ type: GET_ACTIVITIES_ERROR, payload: error });
		}
	};
};

export { activitiesReducer, getActivities };
