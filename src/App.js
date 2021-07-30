import React, { Component } from 'react'
import './App.css'
import Mole from './components/mole/Mole.js'

class App extends Component {
  state = {
    dens: this.getDensState(),
    points: 0,
  }

  componentDidMount() {
    this.drawGame()
  }

  // This gets called in the componentDidMount lifecycle method
  // Whenever the interval function sets the state
  // The component is re-rendered and start game gets called again
  drawGame() {
    setInterval(() => {
      this.setState({
        dens: this.getDensState()
      })
    }, 1500)
  }

  // This creates a 9 element array
  // and populates it with isMoleVisible boolean based on Math.random()
  getDensState() {
    return new Array(9).fill({}).map(() => {
      return { 
        isMoleVisible: [true,false][Math.round(Math.random())] 
      }
    })
  }

  // This is called when the anonymous callback function is called by the Mole child component
  onMoleWhacked(event) {
    this.setState({
      points: this.state.points + 1
    })
  }
  render() {
    const dens = this.state.dens.map((den, index) => {
      return (
        // <Mole key={`mole-${index}`} isMoleVisible={den.isMoleVisible} handleClick={this.onMoleWhacked.bind(this)} />
        <Mole key={`mole-${index}`} isMoleVisible={den.isMoleVisible} handleClick={(e) => this.onMoleWhacked(e)} />
      )
    })
    return (
      <div className="App">
        <h1>WHACK-A-MOLE!</h1>
        <h2>Points: {this.state.points}</h2>
        <div className="dens">
          {dens}
          <div style={{clear: 'both'}}></div>
        </div>
      </div>
    )
  }
}

export default App
