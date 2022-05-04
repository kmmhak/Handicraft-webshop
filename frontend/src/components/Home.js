import Card from "./UI_components/Card";
import axios from "axios";
import "./Components.css";
import { useEffect, useState } from "react";

const username = "Minnie";

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/listings/newest`)
      .then(function (response) {
        setListings(response.data.newest);
      });
  }, []);

  if (listings.length !== 0) {
    return (
      <div>
        <h1>Welcome to your home page, {username}!</h1>

        <div className="newest">
          <div className="newest__title">
            <h2>5 newest listings</h2>
          </div>
          <div className="wrapper">
            {listings.map((listing) => (
              <Card key={listing.id} cardData={listing} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default Home;
