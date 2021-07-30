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
  startGame() {
    setInterval(() => {
      this.setState({
        dens: this.getDensState()
      })
    }, 1500)
  }
  getDensState() {
    return new Array(9).fill({}).map(() => {
      return { 
        isMoleVisible: [true,false][Math.round(Math.random())] 
      }
    })
  }
  onMoleWhacked =() => {
    this.setState({
      points: this.state.points + 1
    })
  }
  render() {
    const dens = this.state.dens.map((den, index) => {
      return (
        <Mole visible = {this.state.dens[index].isMoleVisible} moleWhacked = {this.onMoleWhacked} key={`mole-${index}`} />
      )
    })
    console.log(this.state.dens[0].isMoleVisible)
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
