import Card from "./Card";

const cardData = {
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
};

const cardData2 = {
  id: 2,
  img: "https://www.novitaknits.com/media/catalog/product/cache/7dbe654b8b993771ad606e4b2818e8c5/1/6/1643673636-5e6b47ea5fc76151145d8115_1.jpg",
  title: "Novita Nalle Taika",
  category: "yarn",
  subcategory: "wool",
  username: "miisa",
  brand: "Novita",
  length: 10,
  unit: "pcs",
  color: "multi-color",
  price: 30,
  description: "10 new balls of yarn for only 30€, it's a bargain!",
};

const Stretch = () => {
  return (
    <div className="wrapper">
      <Card cardData={cardData} />
      <Card cardData={cardData2} />
    </div>
  );
};

export default Stretch;
