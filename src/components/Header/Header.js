import React, { useState } from 'react';
import logoSrc from '../../images/logo.png';
import defaultProfile from '../../images/default-profile.png';
import { EuiFieldText } from '@elastic/eui';
import {
	HeaderContainer,
	Logo,
	Navigation,
	NavigationLink,
	ProfileAvatar,
} from './styled/Header.styled';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = (props) => {
	const [search, setSearch] = useState('');
	const currentUser = useSelector((state) => state.currentUser);

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	const handleImgError = e => {
		e.target.src = defaultProfile;
	  }

	return (
		<HeaderContainer>
			<Logo src={logoSrc} alt="logo" />
			<EuiFieldText
				placeholder="Search..."
				value={search}
				onChange={(e) => onChange(e)}
				aria-label="Search"
			/>
			<Navigation>
				<NavigationLink as={NavLink} to="/map">
					Map
				</NavigationLink>
				<NavigationLink as={NavLink} to="/feed">
					Feed
				</NavigationLink>
				<NavigationLink as={NavLink} to="/profile">
					<ProfileAvatar src={currentUser.data.imageUrl} onError={handleImgError} alt="profile picture" />
				</NavigationLink>
			</Navigation>
		</HeaderContainer>
	);
};

export { Header };
