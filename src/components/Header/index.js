import React, { Component } from "react";
import './Header.scss';
import Menu from "../Menu";
import Logo from "../Logo";

class Header extends Component {
	render() {
		return (
			<header className="app__header">
				<Logo />
				<Menu />
			</header>
		);
	}
}

export default Header;
