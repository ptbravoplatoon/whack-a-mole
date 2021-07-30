import React, { Component } from 'react';
import './Mole.css';
import MoleIcon from './Mole.svg';

class Mole extends Component {
	render() {
		if (this.props.isVisible === true) {
			return (
				<div className="den" onClick={this.props.onMoleWhacked}>
					<img src={MoleIcon} className="Mole" alt="Mole" />
				</div>
			);
		} else {
			return <div className="den" />;
		}
	}
}

export default Mole;
