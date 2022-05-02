import { useParams } from "react-router-dom";
import cardData from "./Data";

const Listing = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>{cardData[0].title}</h1>
      <img src={cardData[0].img} alt={cardData[0].title} />
      <p>Brand: {cardData[0].brand}</p>
      <p>
        Qty {cardData[0].length} {cardData[0].unit}
      </p>
      <p>Color: {cardData[0].color}</p>
      <p>Seller: {cardData[0].username}</p>
      <p>Category: {cardData[0].category}</p>
      <p>Subcategory: {cardData[0].subcategory}</p>
      <p>Price {cardData[0].price} €</p>
      <p>Description:</p>
      <p>{cardData[0].description}</p>
    </div>
  );
};

export default Listing;
