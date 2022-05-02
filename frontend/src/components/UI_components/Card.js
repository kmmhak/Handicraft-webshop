import "../Components.css";
import Button from "./Button";
import { Link } from "react-router-dom";
import React from "react";

const Card = ({ cardData }) => {
  return (
    <div className="card">
      <div className="card__body">
        <img src={cardData.img} alt={cardData.title} className="card__image" />
        <p className="card__category">
          {cardData.category} / {cardData.subcategory}
        </p>
        <h3 className="card__title">{cardData.title}</h3>
        <p className="card__price">{cardData.price} €</p>
      </div>
      <Link to={`/listings/${cardData.id}`}>
        <Button className="card__btn" text="view item"></Button>
      </Link>
    </div>
  );
};

/*
 */

export default Card;
