import React from "react";
import "./Card.scss";

interface CardProps {
  name: string;
  image: string;
  twitter: string;
  comment: string;
}

const Card: React.FC<CardProps> = ({
  name,
  image,
  twitter,
  comment,
}): JSX.Element => (
  <div className="card">
    <div className="card__header">
      <img className="card__header__avatar" src={image} alt={name} />
      <div className="card__header__info">
        <strong className="card__header__info__name">{name}</strong>
        <span className="card__header__info__twitter">{twitter}</span>
      </div>
    </div>
    <p className="card__body">{comment}</p>
  </div>
);

export default Card;
