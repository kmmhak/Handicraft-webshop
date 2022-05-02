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
      <Route path="/listings/:id" element={<Listing />} />
    </Routes>
  );
};

export default Router;
