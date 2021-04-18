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
import { useSelector, useDispatch } from 'react-redux';
import { useGoogleLogout } from 'react-google-login';
import { setCurrentUserSuccess } from '../../store/slices/currentUser';

const Header = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');
	const [isPopoverOpen, setIsPopoverOpen] = useState(false);
	const currentUser = useSelector((state) => state.currentUser);

	const { signOut } = useGoogleLogout({
		clientId:
			'612839367197-tmqaq7mja08gfuunupfbnk3at9unmda8.apps.googleusercontent.com',
		onLogoutSuccess: () => {
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

	const onProfileClick = () =>
		setIsPopoverOpen((isPopoverOpen) => !isPopoverOpen);

	const closePopover = () => setIsPopoverOpen(false);

	const goToProfilePage = () => {
		setIsPopoverOpen(false);
		history.push('/profile');
	};

	const logOut = () => {
		setIsPopoverOpen(false);
		signOut();
	};

	const profile = (
		<ProfileAvatar
			src={currentUser.data.imageUrl}
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
		</EuiContextMenuItem>,
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
