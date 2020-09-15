import React, { PureComponent } from 'react';

class CardDesc extends PureComponent {
  state = {
    open: false,
  };
  toggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  render() {
    const { open } = this.state;
    const cn = `card__desc__text ${open ? '' : 'less'}`;
    return (
      <div className="card__desc">
        <div className={cn}>{this.props.children}</div>
        <button
          className="card__desc__btn"
          onClick={this.toggle}
        >
          {open ? 'Less' : 'More'}
        </button>
      </div>
    );
  }
}

export default CardDesc;
