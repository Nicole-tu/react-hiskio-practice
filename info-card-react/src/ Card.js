import React, { Component } from 'react';
import './Card.css';
import CardTeacher from './CardTeacher';

class Card extends Component {
  render() {
    const {
      title, desc, like, students, price, teacher
    } = this.props.data
    return (
      <div className="card">
        <h2 className="card__title">{title}</h2>
        <div className="card__desc">{desc}</div>
      </div>
    );
  }
}

export default Card;
