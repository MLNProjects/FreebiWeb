import React from 'react';
import './UserAuth.css';
import { GlobalState } from '../../utilities/StateManagement/stateManagement';
import auth from '../../utilities/base';

const UserAuth = () => {
	const [{ login, user }, dispatch] = React.useContext(GlobalState);

	if (!user.currentUser) {
		return (
			<div
				onClick={() => {
					dispatch({
						type: 'toggleLogin',
						login: { toggle: !login.toggle },
					});
					dispatch({
						type: 'toggleMenu',
						menu: { toggle: false },
					});
				}}
				className="authStatus-wrapper"
			>
				<p>Login</p>
			</div>
		);
	} else {
		return (
			<div
				onClick={() => {
					auth.auth().signOut();
					dispatch({
						type: 'toggleLogin',
						login: { toggle: false },
					});
					dispatch({
						type: 'changeAuthState',
						user: { uid: auth.auth().currentUser.uid },
					});
					console.log('User logged out');
				}}
				className="authStatus-wrapper"
			>
				<p>Logout</p>
			</div>
		);
	}
};

export default UserAuth;
