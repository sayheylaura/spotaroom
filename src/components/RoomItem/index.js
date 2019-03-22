import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

class RoomItem extends Component {
	render() {
		const { room } = this.props;
		const { photoUrls, title, pricePerMonth, currencySymbol } = room;

		return (
			<li className="rooms__item">
				<div className="room__image-container">
					<img
						className="room__image"
						src={photoUrls.homecardHidpi}
						alt="Room"
					/>
				</div>

				<h2>{title}</h2>

				<div>
					{pricePerMonth}
					{currencySymbol}
				</div>

				<Button buttonType="button" buttonStyles="btn">
					More details
				</Button>

				<Button buttonType="button" buttonStyles="btn">
					Book now!
				</Button>
			</li>
		);
	}
}

RoomItem.propTypes = {
	room: PropTypes.object.isRequired
};

export default RoomItem;
