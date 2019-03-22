import React, { Component } from "react";
import './Header.scss';
import Menu from "../Menu";

class Header extends Component {
	render() {
		return (
			<header className="app__header">
				<div className="logo">[ Spotaroom ]</div>
				<Menu />
			</header>
		);
	}
}

export default Header;
