import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'

class Mole extends Component {
  
  display_mole() {
    if(this.props.visible) {
      console.log("passed true")
      return (
        <img src={MoleIcon} className="Mole" alt="Mole" onClick={this.props.moleWhacked}/>
      )
    } else {
      console.log("passed false")
    }
  }
  
  render() {
    console.log(this.props.visible);
    
    return (
      <div className="den">
        {this.display_mole()}
      </div>
    )
  }
}

export default Mole
