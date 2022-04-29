import "./Components.css";

const Card = ({ cardData }) => {
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
      <button className="card__btn">View item</button>
    </div>
  );
};

export default Card;
