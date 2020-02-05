import React, { useEffect } from "react";
import { connect } from "react-redux";

import history from "../history";

const requireAuth = Component => {
	const ComposedComponent = props => {
		useEffect(
			() => {
				if (!props.auth) {
					history.push("/");
				}
			},
			[props.auth]
		);

		return <Component {...props} />;
	};

	const mapStateToProps = state => {
		return { auth: state.auth };
	};

	return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
