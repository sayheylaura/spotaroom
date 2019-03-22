import React, { Component } from "react";
import { fetchRooms } from "./services/RoomService";
import "./App.scss";
import Header from "./components/Header";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			roomData: []
		};
	}

	componentDidMount() {
		fetchRooms()
			.then(data => {
				const results = data.homecards;
				console.log(results);
				this.setState({
					roomData: results
				});
			});
	}

	render() {
		return (
			<div className="App">
				<Header />
			</div>
		);
	}
}

export default App;
