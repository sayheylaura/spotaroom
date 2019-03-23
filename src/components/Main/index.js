import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Main.scss";
import RoomList from "../RoomList";

class Main extends Component {
	render() {
		const { rooms } = this.props;
		return (
			<main className="app__main">
				<RoomList rooms={rooms} />
			</main>
		);
	}
}

Main.propTypes = {
	rooms: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Main;
