import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { Map } from './pages/Map';
import { Login } from './pages/Login';
import { Feed } from './pages/Feed';

const AppRoutes = () => {
	const user = {
		id: 1,
		name: 'Victor',
	};

	if (user) {
		return (
			<div>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route exact path="/" component={Map} />
						<Route exact path="/feed" component={Feed} />
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
