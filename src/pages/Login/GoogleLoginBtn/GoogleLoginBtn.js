import React from 'react';
import { useGoogleLogin } from 'react-google-login';
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
		dispatch(setCurrentUserSuccess(res.profileObj));
		refreshTokenSetup(res);
	};

	const onFailure = (res) => {
		dispatch(setCurrentUserError(res.profileObj));
	};

	const { signIn } = useGoogleLogin({
		onSuccess,
		onFailure,
		clientId,
		isSignedIn: true,
		accessType: 'offline',
	});

	return (
		<div onClick={signIn}>
			<GoogleLogin
				clientId={clientId}
				buttonText="Login With Google"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	);
};

export { GoogleLoginBtn };
