import React, { Component } from 'react'
import './Mole.css'
import MoleIcon from './Mole.svg'

class Mole extends Component {
  render() {
    if (this.props.denObj.isMoleVisible){
      // console.log("this.state inside Mole", this.state)
      if (this.props.blueBoolean === true){
        return (
          <div className="blue-den" onClick={this.props.onBlueMoleWhacked}>
            <img src={MoleIcon} className="Mole" alt="Mole" />
          </div>
        ) 
      }
      
      else{
        return (
          <div className="den" onClick={this.props.onMoleWhacked}>
            <img src={MoleIcon} className="Mole" alt="Mole" />
          </div>
        )
      }
    }
    else {
      return (
      <div className="den">

      </div>
      )
    }
  }
}

export default Mole
