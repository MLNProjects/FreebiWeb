import React from 'react';
import Nav from '../Nav/Nav';
import UserAuth from '../../Routes/UserAuth/UserAuth';
import Menu from '../Menu/Menu';
import Login from '../../Routes/Login/Login';

import './Header.css';

const Header = () => {
	return (
		<div>
			<div className="header-wrapper">
				<Nav />
				<h1 className="company-title">Freebee</h1>
				<UserAuth />
			</div>
			<Menu />
			<Login />
		</div>
	);
};

export default Header;
