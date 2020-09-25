import React, { Component } from 'react';
import { Button, Card } from 'antd';
import style from './Game.module.css';
import ModalCongrate from './ModalCongrate';

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
  [2, 4, 6]
];

class Game extends Component {
  state = {
    grids: Array(9).fill(0),
    player: 0,
    winner: 0,
    started: false,
    endGame: false
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.grids !== this.state.grids) {
      this.setState({
        winner: this.getWinner()
      });
    }
  }
  onChangePlayer = value => {
    this.setState({
      player: value
    });
  }
  handleClick = index => {
    if (this.state.winner !== 0) return;

    const grids = [...this.state.grids];
    if (grids[index] !== 0) return;

    grids[index] = this.state.player;
    this.setState({
      grids,
      player: -this.state.player
    })
  };
  startGame = () => {
    this.setState({
      started: true
    })
  };
  reset = () => {
    this.setState({
      grids: Array(9).fill(0),
      player: 0,
      winner: 0,
      started: false,
      endGame: false
    })
  };
  getWinner = () => {
    const { grids } = this.state;
    for (const line of lines) { // of => 元素, in => index
      const [i, j, k] = line;
      // if (grids[i] === grids[j] && grids[j] === grids[k]) {
      //   return grids[i];
      // }
      if (grids[i] !== 0 && grids[i] === grids[j] && grids[j] === grids[k]) {
        this.setState({
          endGame: true
        });
        return grids[i];
      }
    }
    return 0;
  }
  render() {
    const { grids, player, winner, started, endGame } = this.state;
    return (
      <div className={style.App}>
        <div className={style.container}>
          {started ? <h2>Who's turn:</h2> : <h2>Choose player</h2>}
          <div className={style.playerContianer} >
            <span className={[style.circle, style.playerCard,
            started ? style.playerStarted : null,
            player === 1 ? style.playerSelected : null].join(' ')}
              onClick={() => !started ? this.onChangePlayer(1) : null}>O</span>
            <span className={[style.times, style.playerCard,
            started ? style.playerStarted : null,
            player === -1 ? style.playerSelected : null].join(' ')}
              onClick={() => !started ? this.onChangePlayer(-1) : null}>X</span>
          </div>
          {started ?
            [
              <Card className={style.card} >
                <div className={style.board}>
                  {grids.map((elm, idx) => (
                    <div className={style.grid} key={idx} onClick={() => this.handleClick(idx)}>
                      <span className={[elm === 1 ? style.circle : null, elm === -1 ? style.times : null].join(' ')}>{toSymbol(elm)}</span>
                    </div>
                  ))}
                </div>
              </Card>,
              <Button type="default" onClick={this.reset}>Restart Game</Button>
            ]
            : <Button type="primary" onClick={this.startGame}>Start Game</Button>}
          {endGame ?
            <ModalCongrate winner={winner} /> : null}
        </div>
      </div >
    );
  }
}

export default Game;
