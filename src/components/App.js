import React from "react";
import { Router, Route } from "react-router-dom";

import history from "../history";
import requireAuth from "./requireAuth";

import Header from "./Header";
import HomePage from "./HomePage";
import Posts from "./Posts";

const App = () => {
	return (
		<Router history={history}>
			<Header />
			<Route path="/" exact component={HomePage} />
			<Route path="/posts" component={requireAuth(Posts)} />
		</Router>
	);
};

export default App;
