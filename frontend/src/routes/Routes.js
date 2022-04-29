import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Fabric from "../components/Fabric";
import Yarn from "../components/Yarn";
import BobbinLace from "../components/BobbinLace";
import HobbyCraft from "../components/HobbyCraft";
import Stretch from "../components/Stretch";
import College from "../components/College";
import Wool from "../components/Wool";
import Cotton from "../components/Cotton";
import BobbinPillow from "../components/BobbinPillow";
import Bobbin from "../components/Bobbin";
import CardSupplies from "../components/CardSupplies";
import Decor from "../components/Decor";
import Listing from "../components/Listing";

const Router = () => {
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

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/categories/kankaat" element={<Fabric />} />
      <Route path="/categories/langat" element={<Yarn />} />
      <Route path="/categories/nyplaystarvikkeet" element={<BobbinLace />} />
      <Route path="/categories/askartelu" element={<HobbyCraft />} />
      <Route path="/subcategories/trikoot" element={<Stretch />} />
      <Route path="/subcategories/colleget" element={<College />} />
      <Route path="/subcategories/villalangat" element={<Wool />} />
      <Route path="/subcategories/puuvillalangat" element={<Cotton />} />
      <Route path="/subcategories/nyplaystyynyt" element={<BobbinPillow />} />
      <Route path="/subcategories/nypylat" element={<Bobbin />} />
      <Route path="/subcategories/kortit" element={<CardSupplies />} />
      <Route path="/subcategories/koristeet" element={<Decor />} />
      <Route path="/listings/:id" element={<Listing listing={cardData[0]} />} />
    </Routes>
  );
};

export default Router;
