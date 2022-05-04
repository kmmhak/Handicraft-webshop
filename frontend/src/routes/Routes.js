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
import AddListing from "../components/AddListing";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/listings" element={<AddListing />} />
      <Route path="/categories/fabrics" element={<Fabric />} />
      <Route path="/categories/yarns" element={<Yarn />} />
      <Route path="/categories/bobbin%20lace" element={<BobbinLace />} />
      <Route path="/categories/hobby%20crafts" element={<HobbyCraft />} />
      <Route path="/subcategories/stretch" element={<Stretch />} />
      <Route path="/subcategories/college" element={<College />} />
      <Route path="/subcategories/wool" element={<Wool />} />
      <Route path="/subcategories/cotton" element={<Cotton />} />
      <Route
        path="/subcategories/bobbin%20pillows"
        element={<BobbinPillow />}
      />
      <Route path="/subcategories/bobbins" element={<Bobbin />} />
      <Route path="/subcategories/card%20supplies" element={<CardSupplies />} />
      <Route path="/subcategories/decorations" element={<Decor />} />
      <Route path="/listings/:id" element={<Listing />} />
    </Routes>
  );
};

export default Router;
