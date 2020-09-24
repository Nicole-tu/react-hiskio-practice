import React, { Component } from 'react';
import './Upgrade.css';
import cookieMonster from './images/cookie-monster.jpg';
import cookie from './images/cookie.jpeg';
import cookiesImg from './images/cookies.png';
import Grandma from './images/grandma.jpg';
import Farm from './images/farm.png';
import Mine from './images/mine.png';

const upgrades = [
  {
    name: 'Grandma',
    price: 10,
    auto: 1,
    picture: Grandma
  },
  {
    name: 'Farm',
    price: 100,
    auto: 8,
    picture: Farm
  },
  {
    name: 'Mine',
    price: 1000,
    auto: 60,
    picture: Mine
  }
]

class UpgradeApp extends Component {
  state = {
    cookies: 0,
    auto: 0,
    upgrades
  };
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
  };
  addCookie = () => {
    this.setState({
      cookies: this.state.cookies + 1
    });
  };
  upgrade = idex => {
    const { cookies, auto, upgrades } = this.state;
    const u = upgrades[idex];

    if (cookies < u.price) return;

    this.setState({
      cookies: cookies - u.price,
      auto: auto + u.auto,
      upgrades: upgrades.map((v, i) =>
        i !== idex ? v : { ...v, price: v.price * 1.15 }
      )
    });
  };
  render() {
    const { cookies, upgrades } = this.state;

    return (
      <div className="board">
        <img className="cookie cookieDroppingFullLeft" src={cookiesImg} />
        <img className="cookie cookieDrop" src={cookiesImg} />
        <img className="cookie cookieDroppingFullRight" src={cookiesImg} />

        <h3 className="cookieHeader">Cookie Clicker</h3>
        <h1 className="cookieCount">{parseInt(cookies, 10)}</h1>
        <img className="cookieMonsterImg" src={cookieMonster} />
        <div className="ground" />
        <div className="functionContainer">
          <div className="functionItem">
            <img className="cookieImg" src={cookie} onClick={this.addCookie} />
            <span>+1</span>
          </div>
          {upgrades.map(({ price, picture }, idex) => (
            <div className="functionItem">
              <img className="buyFunctionImg" src={picture} key={idex} onClick={() => this.upgrade(idex)} />
              <span>-{parseInt(price, 10)}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UpgradeApp;
