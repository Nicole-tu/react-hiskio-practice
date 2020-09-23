import React, { Component } from 'react';

const upgrades = [
  {
    name: 'Grandma',
    price: 10,
    auto: 1
  },
  {
    name: 'Farm',
    price: 100,
    auto: 8
  },
  {
    name: 'Mine',
    price: 1000,
    auto: 60
  }
]

class UpgradeApp extends Component {
  state = {
    cookies: 0,
    auto: 0,
    upgrades
  }
  componentDidMount() {
    this.time = Date.now();
    this.updateCookie();
  }
  updateCookie = () => {
    const { cookies, auto } = this.state;
    const time = Date.now();
    const step = (auto / 1000) * (time - this.time);// 這一次更新離上一次更新
    this.time = time;

    this.setState({
      cookies: cookies + step
    }, () =>
      requestAnimationFrame(this.updateCookie));
  }
  addCookie = () => {
    this.setState({
      cookies: this.state.cookies + 1
    });
  }
  upgrade = (idex) => {
    const { cookies, auto, upgrades } = this.state;
    const u = upgrades[idex];

    if (cookie < u.price) return;

    this.setState({
      cookies: cookies - u.price,
      auto: auto + u.auto,
      upgrades: upgrades.map((v, i) => (
        i !== idex ? v : { ...v, price: v.price * 1.15 }
      ))
    });
  }
  render() {
    const { cookies, upgrades } = this.state;

    return (
      <div>
        <h3>Cookies</h3>
        <h1>{cookies}</h1>
        <hr />
        <button onClick={this.addCookie}>Click</button>
        <br />
        {upgrades.map(({ name, price }, idex) => [
          <button onClick={() => this.upgrade(idex)}>{name}</button>,
          <span>{parseInt(price, 10)}</span>,
          <br />
        ])}
      </div>
    );
  }
}

export default UpgradeApp;
