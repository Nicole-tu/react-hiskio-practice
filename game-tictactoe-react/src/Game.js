import React, { Component } from 'react';

const toSymbol = n => {
  switch (n) {
    case 0: return '';
    case 1: return 'O';
    case -1: return 'X';
  }
};

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

class Game extends Component {
  state = {
    grids: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    player: 1,
    winner: 0
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.grids !== this.state.grids) {
      this.setState({
        winnder: this.getWinner()
      })
    }
  }
  handleClick = (index) => {
    if (this.state.winner !== 0) return;
    const grids = [...this.state.grids];
    if (grids[index] !== 0) return;
    grids[index] = this.state.player;
    this.setState({
      grids,
      player: -this.state.player
    })
  }
  reset = () => {
    this.setState({
      grids: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      player: 1
    })
  }
  getWinner = () => {
    const { grids } = this.state;
    for (const line of lines) { // of => 元素 in => index
      const [i, j, k] = line;
      if (grids[i] === grids[j] && grids[j] === grids[k]) {
        return grids[i];
      }
    }
  }
  render() {
    const { grids, player } = this.state;
    return (
      <div>
        <div className={style.board} >
          {grids.map((elm, idx) => (
            <div className={style.grid} onClick={() => this.handleClick(idx)}>
              <span>{toSymbol(elm)}</span>
            </div>
          ))}
        </div>
        <div>Player:{toSymbol(player)}</div>
        <div>Winner:</div>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Game;
