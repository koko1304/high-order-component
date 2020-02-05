import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const Header = props => {
	const authToggle = () => {
		if (props.auth) {
			props.signOut();
		} else {
			props.signIn();
		}
	};

	const authButton = () => {
		if (props.auth) {
			return (
				<button onClick={authToggle} className="btn btn-primary">
					Log out
				</button>
			);
		} else {
			return (
				<button onClick={authToggle} className="btn btn-primary">
					Log In
				</button>
			);
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">
					High Order Component
				</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/posts">
								Posts
							</Link>
						</li>
					</ul>
					{authButton()}
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = state => {
	return { auth: state.auth };
};

export default connect(mapStateToProps, { signIn, signOut })(Header);
