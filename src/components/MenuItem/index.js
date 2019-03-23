import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./MenuItem.scss";

const MenuItem = ({ content }) => (
	<li className="menu__item">
		<Link to="/" className="menu__link">
			{content}
		</Link>
	</li>
);

MenuItem.propTypes = {
	content: PropTypes.string.isRequired
};

export default MenuItem;
