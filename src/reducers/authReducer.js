import { SIGN_IN, SIGN_OUT } from "../actions/types";

const authReducer = (auth = false, actions) => {
	switch (actions.type) {
		case SIGN_IN:
			return true;
		case SIGN_OUT:
			return false;
		default:
			return auth;
	}
};

export default authReducer;
