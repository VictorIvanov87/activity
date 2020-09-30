import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Map } from './pages/Map';
import { Login } from './pages/Login';
import { Feed } from './pages/Feed';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Map} />
				<Route exact path="/feed" component={Feed} />
				<Route exact path="/login" component={Login} />
				<Redirect to="/">
					<Route path="/" />
				</Redirect>
			</Switch>
		</BrowserRouter>
	);
};

export { AppRoutes };
