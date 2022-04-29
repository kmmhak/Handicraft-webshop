import "../Components.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Card = ({ cardData }) => {
  const navigate = useNavigate();

  const viewListing = () => {
    navigate(`/listings/${cardData.id}`);
  };
  return (
    <div className="card">
      <div className="card__body">
        <img src={cardData.img} alt={cardData.title} class="card__image" />
        <p className="card__category">
          {cardData.category} / {cardData.subcategory}
        </p>
        <h3 className="card__title">{cardData.title}</h3>
        <p className="card__price">{cardData.price} €</p>
      </div>
      <Button
        handleClick={viewListing}
        text="View item"
        className="card__btn"
      />
    </div>
  );
};

export default Card;
