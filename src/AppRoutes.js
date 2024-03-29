import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from './components/Header';
import { Map } from './pages/Map';
import { Login } from './pages/Login';
import { Feed } from './pages/Feed';
import { Profile } from './pages/Profile';
import { setCurrentUserSuccess } from './store/slices/currentUser';

const AppRoutes = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.currentUser.data);
	const currentUser = JSON.parse(localStorage.getItem('currentUser'));

	if (!user && currentUser) {
		dispatch(setCurrentUserSuccess(currentUser));
	}

	if (currentUser) {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/" component={Map} />
						<Route exact path="/feed" component={Feed} />
						<Route exact path="/profile" component={Profile} />
						<Redirect to="/">
							<Route path="/" />
						</Redirect>
					</Switch>
				</BrowserRouter>
			</div>
		);
	} else {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Redirect to="/login">
						<Route path="/login" />
					</Redirect>
				</Switch>
			</BrowserRouter>
		);
	}
};

export { AppRoutes };
