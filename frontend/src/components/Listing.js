import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Listing = () => {
  let { id } = useParams();

  const [listing, setListing] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/listings/${id}`).then(function (response) {
      setListing(response.data.listings[0]);
    });
  }, [id]);

  if (listing.length !== 0) {
    return (
      <div>
        <h1>{listing.title}</h1>
        <br></br>
        <img src={listing.img} alt={listing.title} />
        {listing.brand !== null && <p>Brand: {listing.brand}</p>}
        <p>
          Qty {listing.length} {listing.unit}
        </p>
        {listing.color !== null && <p>Color: {listing.color}</p>}
        <p>Seller: {listing.username}</p>
        <p>Category: {listing.category}</p>
        <p>Subcategory: {listing.subcategory}</p>
        <p>
          <strong>Price:</strong> {listing.price} €
        </p>
        <p>Description:</p>
        <p>{listing.description}</p>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Listing;
