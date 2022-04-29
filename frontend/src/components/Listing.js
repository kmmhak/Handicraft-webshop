const Listing = ({ listing }) => {
  return (
    <div>
      <h1>{listing.title}</h1>
      <img src={listing.img} alt={listing.title} />
      <p>Brand: {listing.brand}</p>
      <p>
        Qty {listing.length} {listing.unit}
      </p>
      <p>Color: {listing.color}</p>
      <p>Seller: {listing.username}</p>
      <p>Category: {listing.category}</p>
      <p>Subcategory: {listing.subcategory}</p>
      <p>Price {listing.price} €</p>
      <p>Description:</p>
      <p>{listing.description}</p>
    </div>
  );
};

export default Listing;
