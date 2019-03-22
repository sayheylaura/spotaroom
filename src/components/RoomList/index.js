import React, { Component } from "react";
import PropTypes from "prop-types";
import './RoomList.scss';
import RoomItem from "../RoomItem";

class RoomList extends Component {
	render() {
		const { rooms } = this.props;
		return (
			<section className="app__rooms">
				<ul className="rooms__list">
					{rooms.map((room, ind) => {
						return <RoomItem key={ind} room={room} />;
					})}
				</ul>
			</section>
		);
	}
}

RoomList.propTypes = {
	rooms: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default RoomList;
