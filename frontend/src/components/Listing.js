import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Listing = () => {
  let { id } = useParams();

  const [listing, setListing] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/listings/${id}`).then(function (response) {
      setListing(response.data.listings);
    });
  }, [id]);

  return (
    <div>
      <h1>{listing[0]?.title}</h1>
      <br></br>
      <img src={listing[0]?.img} alt={listing[0]?.title} />

      <p>Brand: {listing[0]?.brand}</p>
      <p>
        Qty {listing[0]?.length} {listing[0]?.unit}
      </p>
      <p>Color: {listing[0]?.color}</p>
      <p>Seller: {listing[0]?.username}</p>
      <p>Category: {listing[0]?.category}</p>
      <p>Subcategory: {listing[0]?.subcategory}</p>
      <p>
        <strong>Price:</strong> {listing[0]?.price} €
      </p>
      <p>Description:</p>
      <p>{listing[0]?.description}</p>
    </div>
  );
};

export default Listing;
