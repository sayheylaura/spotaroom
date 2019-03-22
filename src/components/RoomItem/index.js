import React, { Component } from "react";
import PropTypes from "prop-types";
import './RoomItem.scss';
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

				<div className="room__content-wrapper">
					<div className="room__details-wrapper">
						<h2 className="room__description">{title}</h2>

						<div className="room__price">
							{pricePerMonth}
							{currencySymbol}
						</div>
					</div>

					<div className="room__buttons-wrapper">
						<Button buttonType="button" buttonStyles="btn btn-secondary">
							More details
						</Button>

						<Button buttonType="button" buttonStyles="btn btn-primary">
							Book now!
						</Button>
					</div>
				</div>
			</li>
		);
	}
}

RoomItem.propTypes = {
	room: PropTypes.object.isRequired
};

export default RoomItem;
