import React from "react";
import { Link } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ content }) => (
	<li className="menu__item">
		<Link to="/" className="menu__link">
			{content}
		</Link>
	</li >
);

export default MenuItem;
