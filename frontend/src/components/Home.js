import Card from "./UI_components/Card";
import "./Components.css";
import cardData from "./Data.js";

const username = "Miisa";

const Home = () => {
  return (
    <div>
      <h1>Welcome to your home page, {username}!</h1>

      <div className="newest">
        <div className="newest__title">
          <h2>10 newest listings</h2>
        </div>
        <div className="wrapper">
          <Card cardData={cardData[0]} />
          <Card cardData={cardData[1]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
