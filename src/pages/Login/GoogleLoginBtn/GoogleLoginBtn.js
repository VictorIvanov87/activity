import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { refreshTokenSetup } from '../../../utils/refreshToken';
import { setCurrentUserSuccess, setCurrentUserError } from '../../../store/slices/currentUser';

const clientId =
	'144781989518-8gjfc37fd9ed9o434tfsa723rm288edl.apps.googleusercontent.com';

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
		<button onClick={signIn} className="button">
			<span className="buttonText">Sign in with Google</span>
		</button>
	);
};

export { GoogleLoginBtn };
