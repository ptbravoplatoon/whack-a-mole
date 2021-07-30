import React, { Component } from 'react';
import './App.css';
import Mole from './components/mole/Mole.js';

class App extends Component {
	state = {
		dens: this.getDensState(),
		points: 0
	};

	// componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
	// Initialization that requires DOM nodes should go here.
	// If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
	componentDidMount() {
		this.startGame();
	}

	// when the App is mounted this will execute since it is called in componentDidMount
	// will call getDensState and call it again every 1.5 seconds
	startGame() {
		setInterval(() => {
			this.setState({
				dens: this.getDensState()
			});
		}, 1500);
	}

	// creates a new array of nine items
	// creates an object inside of each item with a isMoleVisible key and either a true or false value
	getDensState() {
		return new Array(9).fill({}).map(() => {
			return {
				isMoleVisible: [ true, false ][Math.round(Math.random())]
			};
		});
	}

	// sets the points state to the previous points state value + 1
	onMoleWhacked = () => {
		this.setState({
			points: this.state.points + 1
		});
	};
	render() {
		const dens = this.state.dens.map((den, index) => {
			return <Mole key={`mole-${index}`} isVisible={den.isMoleVisible} onMoleWhacked={this.onMoleWhacked} />;
		});
		return (
			<div className="App">
				<h1>WHACK-A-MOLE!</h1>
				<h2>Points: {this.state.points}</h2>
				<div className="dens">
					{dens}
					<div style={{ clear: 'both' }} />
				</div>
			</div>
		);
	}
}

export default App;
