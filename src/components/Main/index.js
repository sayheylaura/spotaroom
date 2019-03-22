import React, { Component } from "react";
import PropTypes from "prop-types";

class Main extends Component {
	render() {
		const { rooms } = this.props;
		console.log(rooms);
		return <main className="app__main">here goes the main</main>;
	}
}

Main.propTypes = {
	rooms: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Main;
