import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../app';
import Home from '../views/home';
import About from '../views/about';
import Code from '../views/code';
import Components from '../views/component';
import Product from '../views/product';
import Login from '../views/login';

import DevTools from '../asset/DevTools';

export default class Root extends Component {
	render() {
		return (
			<div>
				<Router history={browserHistory}>
					<Route path="/" component={App}>
						<IndexRoute component={Home} />
						<Route path="About" component={About} />
						<Route path="code" component={Code} />
						<Route path="component" component={Components} />
						<Route path="product" component={Product} />
						<Route path="login" component={Login} />
					</Route>
				</Router>
				<DevTools />
			</div>
		)
	}
}
