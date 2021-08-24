import React from 'react';
import Style from './card.module.css';

const Card = (props) => {
  return (
    <div className={Style.cardMain}>
      <img src={props.img} alt="bal" />
      <h1>Facilis Gravida</h1>
      <p>A lacus vestibulum sed. Amet purus gravida quis blandit turpis.</p>
    </div>
  );
}

export default Card;
