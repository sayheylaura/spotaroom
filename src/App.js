import React, { Component } from "react";
import { fetchRooms } from "./services/RoomService";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			roomData: [],
			isFetching: true
		};
	}

	componentDidMount() {
		fetchRooms().then(data => {
			const results = data.homecards;
			this.setState({
				roomData: results,
				isFetching: false
			});
		});
	}

	render() {
		const { roomData, isFetching } = this.state;
		return (
			<div className="App">
				<Header />

				{isFetching
					? <Loader />
					: <Main rooms={roomData} />
				}

			</div>
		);
	}
}

export default App;
