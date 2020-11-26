import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
// import { robots } from "./robots";
import Searchbox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scroll";

function App() {
	const [robots, setRobots] = useState([]);

	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				return response.json();
			})
			.then((robots) => {
				setRobots(robots);
			});
	});

	function onSearchChange(event) {
		setSearch(event.target.value);
	}

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(search.toLowerCase());
	});
	return !robots.length ? (
		<h1>Loading</h1>
	) : (
		<div className="tc">
			<h1 className="f1">RoboFreinds</h1>
			<Searchbox searchChange={onSearchChange} />
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	);
}

export default App;
