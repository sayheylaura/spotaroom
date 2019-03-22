import React, { Component } from 'react';
import './Menu.scss';
import MenuItem from '../MenuItem';

class Menu extends Component {
	render() {
		return (
			<nav className="menu">
				<ul className="menu__list">
					<MenuItem content="The company" />
					<span className="menu__divider">-</span>
					<MenuItem content="How we work" />
					<span className="menu__divider">-</span>
					<MenuItem content="Contact us" />
				</ul>
			</nav>
		);
	}
}

export default Menu;
