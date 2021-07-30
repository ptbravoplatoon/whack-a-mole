import React, { Component } from 'react'
import './App.css'
import Mole from './components/mole/Mole.js'

class App extends Component {
  state = {
    dens: this.getDensState(),
    blue: this.getBlueDens(),
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

  getBlueDens() {
    return new Array(9).fill({}).map(() => {
      return { 
        isHoleBlue: [true,false][Math.round(Math.random())] 
      }
    })
  }
  
  onMoleWhacked = () => {
    // console.log("this inside onMolewhacked", App.state.points)
    this.setState({
      points: this.state.points + 1
    })
  }

  onBlueMoleWhacked = () => {
    console.log("BLUE!")
    // console.log("this inside onMolewhacked", App.state.points)
    this.setState({
      points: this.state.points + 2
    })
  }

  render() {
    const dens = this.state.dens.map((den, index) => {
      const blueDens = this.getBlueDens()
      return (
        <Mole key={`mole-${index}`} denObj={den} blueBoolean={blueDens[index]["isHoleBlue"]} onMoleWhacked={this.onMoleWhacked} onBlueMoleWhacked={this.onBlueMoleWhacked}/>
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
