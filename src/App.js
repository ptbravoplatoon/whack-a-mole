import React, { Component } from 'react'
import './App.css'
import Mole from './components/mole/Mole.js'

class App extends Component {
  state = {
    dens: this.getDensState(),
    points: 0,
  }
  componentDidMount() {
    this.startGame()
  }
  // SetInterval makes it so that getDensState is called every 1500 milliseconds or every 1.5 seconds
  startGame() {
    setInterval(() => {
      this.setState({
        dens: this.getDensState()
      })
    }, 1500)
  }
  // Creates an array with 9 entries that are randomly assigned either true or false. If true the mole appears.
  getDensState() {
    return new Array(9).fill({}).map(() => {
      return { 
        isMoleVisible: [true,false][Math.round(Math.random())] 
      }
    })
  }
  // When a mole is clicked on this function is called and it increments the state points by one.
  onMoleWhacked = () => {
    this.setState({
      points: this.state.points + 1
    })
  }
  render() {
    const dens = this.state.dens.map((den, index) => {
      return (
        <Mole key={`mole-${index}`} visible={this.state.dens[index].isMoleVisible} onMoleWhacked={this.onMoleWhacked} />
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
