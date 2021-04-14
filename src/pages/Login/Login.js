import React from 'react';
import {GoogleLoginBtn} from './GoogleLoginBtn';
import {LoginPage} from './styled/Login.styled'

const Login = (props) => {
	return <LoginPage><GoogleLoginBtn/></LoginPage>;
};

export { Login };
