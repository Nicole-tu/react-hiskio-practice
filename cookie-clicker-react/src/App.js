import React, { Component } from 'react';

class App extends Component {
  state = {
    cookies: 0,
    auto: 0,
    priceGrandma: 10,
    priceFarm: 100
  }
  componentDidMount() {
    this.autoStep();
  }
  autoStep = () => {
    this.setState(({ cookies, auto }) => ({
      cookies: cookies + auto
    }));
    setTimeout(this.autoStep, 1000);
  }
  addCookie = () => {
    this.setState({
      cookies: this.state.cookies + 1
    });
  }
  buyGrandma = () => {
    if (this.state.cookie < this.state.priceGrandma) return;
    this.setState({
      cookies: this.state.cookies - this.state.priceGrandma,
      auto: this.state.auto + 1,
      priceGrandma: this.state.priceGrandma * 1.15
    });
  }
  buyFarm = () => {
    if (this.state.cookie < this.state.priceFarm) return;
    this.setState({
      cookies: this.state.cookies - this.state.priceFarm,
      auto: this.state.auto + 8,
      priceFarm: this.state.priceFarm * 1.15
    });
  }

  render() {
    const { cookies, priceGrandma, priceFarm } = this.state;

    return (
      <div>
        <h3>Cookies</h3>
        <h1>{cookies}</h1>
        <hr />
        <button onClick={this.addCookie}>Click</button>
        <br />
        <button onClick={this.buyGrandma}>Grandma</button>
        {parseInt(priceGrandma, 10)}
        <br />
        <button onClick={this.buyFarm}>Farm</button>
        {parseInt(priceFarm, 10)}
        <br />
      </div>
    );
  }
}

export default App;
