import React from "react";
import Button from "../Button";

const MenuItem = ({ content }) => (
	<li className="menu__item">
		<Button buttonType="button" buttonStyles="menu__link" >
			{content}
		</Button>
	</li>
);

export default MenuItem;
