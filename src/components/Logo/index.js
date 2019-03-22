import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = () => (
	<Link to="/" className="logo__link">
		<div className="logo">[ Spotaroom ]</div>
	</Link>
);

export default Logo;
