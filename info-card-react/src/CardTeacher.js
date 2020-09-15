import React from 'react';

// stateless functional component
const CardTeacher = ({ data: { name, link, image } }) => (
  <a href={link} className="card__teacher">
    <img className="card__avatar" src={image} />
    <span>{name}</span>
  </a>
);

export default CardTeacher;
