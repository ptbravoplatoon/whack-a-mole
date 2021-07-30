import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'

class Mole extends Component {

  clickHandler = () => {
    this.props.onMoleWhacked()
  }

  render() {
    return (
      <div className="den">
        { this.props.visible && <img src={MoleIcon} className="Mole" alt="Mole" onClick={this.clickHandler} />}
      </div>
    )
  }
}

export default Mole
