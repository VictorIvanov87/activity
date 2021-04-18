import React from 'react';
import { useDispatch } from 'react-redux';
import { refreshTokenSetup } from '../../../utils/refreshToken';
import {
	setCurrentUserSuccess,
	setCurrentUserError,
} from '../../../store/slices/currentUser';
import { GoogleLogin } from 'react-google-login';

const clientId =
	'612839367197-tmqaq7mja08gfuunupfbnk3at9unmda8.apps.googleusercontent.com';
// const secret = '1D4Xeth8EfZhPt0YciYWmxV4';

const GoogleLoginBtn = () => {
	const dispatch = useDispatch();

	const onSuccess = (res) => {
		localStorage.setItem('currentUser', JSON.stringify(res.profileObj));
		dispatch(setCurrentUserSuccess(res.profileObj));
		refreshTokenSetup(res);
	};

	const onFailure = (res) => {
		dispatch(setCurrentUserError(res.profileObj));
	};

	return (
		<GoogleLogin
			clientId={clientId}
			buttonText="Login With Google"
			onSuccess={onSuccess}
			onFailure={onFailure}
			isSignedIn={true}
			cookiePolicy={'single_host_origin'}
		/>
	);
};

export { GoogleLoginBtn };
