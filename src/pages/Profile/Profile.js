import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
	const currentUser = useSelector((state) => state.currentUser);

	return <div>{currentUser.data.givenName}</div>;
};

export { Profile };
