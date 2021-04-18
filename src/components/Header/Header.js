import React, { useState } from 'react';
import logoSrc from '../../images/logo.png';
import defaultProfile from '../../images/default-profile.png';
import {
	EuiFieldText,
	EuiContextMenuPanel,
	EuiContextMenuItem,
	EuiPopover,
} from '@elastic/eui';
import {
	HeaderContainer,
	Logo,
	Navigation,
	NavigationLink,
	ProfileAvatar,
} from './styled/Header.styled';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGoogleLogout } from 'react-google-login';
import { setCurrentUserSuccess } from '../../store/slices/currentUser';

const Header = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	const [isPopoverOpen, setPopover] = useState(false);
	const currentUser = JSON.parse(localStorage.getItem('currentUser'));

	const { signOut } = useGoogleLogout({
		clientId:
			'612839367197-tmqaq7mja08gfuunupfbnk3at9unmda8.apps.googleusercontent.com',
		onLogoutSuccess: () => {
			localStorage.removeItem('currentUser');
			dispatch(setCurrentUserSuccess(null));
			history.push('/login');
		},
		onFailure: () => {
			console.log('logout fail');
		},
	});

	const onChange = (e) => {
		setSearch(e.target.value);
	};

	const handleImgError = (e) => (e.target.src = defaultProfile);

	const onProfileClick = () => setPopover(!isPopoverOpen);

	const closePopover = () => setPopover(false);

	const goToProfilePage = () => {
		setPopover(false);
		history.push('/profile');
	};

	const logOut = () => {
		setPopover(false);
		signOut();
	};

	const profile = (
		<ProfileAvatar
			src={currentUser?.imageUrl || defaultProfile}
			onError={handleImgError}
			alt="profile picture"
			onClick={onProfileClick}
		/>
	);

	const profileDropdownItems = [
		<EuiContextMenuItem key="profile" icon="user" onClick={goToProfilePage}>
			Your Profile
		</EuiContextMenuItem>,
		<EuiContextMenuItem key="logout" icon="exit" onClick={logOut}>
			Log Out
		</EuiContextMenuItem>
	];

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
				<div>
					<EuiPopover
						button={profile}
						isOpen={isPopoverOpen}
						closePopover={closePopover}
					>
						<EuiContextMenuPanel size="xs" items={profileDropdownItems} />
					</EuiPopover>
				</div>
			</Navigation>
		</HeaderContainer>
	);
};

export { Header };
