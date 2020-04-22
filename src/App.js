import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}

const initialState = {
  food: getRandomCoordinates(),
  speed: 200,
  direction: 'RIGHT',
  snakeDots: [
    [0,0],
    [2,0]
  ]
}

class App extends Component {

  state = {
    snakeDots: [
      [0,0],
      [2,0]
    ]
  }
  render() {
    return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots}/>
      </div>
    );
  }
}

export default App;
