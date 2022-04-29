import Card from "./UI_components/Card";
import "./Components.css";

const username = "Miisa";

const cardData = [
  {
    id: 1,
    img: "https://www.myrtikki.fi/wp-content/uploads/2020/09/oranssi_tummat.jpg",
    title: "Orange Bat Bat Baby fabric, 1,5 m",
    category: "fabric",
    subcategory: "stretch",
    username: "miisa",
    brand: "Myrtikki",
    length: 1,
    unit: "pcs",
    color: "orange",
    price: 30,
    description: "Colorful quality stretch fabric, unwashed",
  },
  {
    id: 2,
    img: "https://www.novitaknits.com/media/catalog/product/cache/7dbe654b8b993771ad606e4b2818e8c5/1/6/1643673636-5e6b47ea5fc76151145d8115_1.jpg",
    title: "Novita Nalle Taika 10 pcs",
    category: "yarn",
    subcategory: "wool",
    username: "miisa",
    brand: "Novita",
    length: 10,
    unit: "pcs",
    color: "multi-color",
    price: 30,
    description: "10 new balls of yarn for only 30€, it's a bargain!",
  },
];

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
