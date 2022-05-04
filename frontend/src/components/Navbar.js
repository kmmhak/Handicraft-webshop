import { Link } from "react-router-dom";
import "./Components.css";
import Button from "./UI_components/Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={`/`}>
        <Button className="navbar__btn" text="Home"></Button>
      </Link>

      <Link to={`/register`}>
        <Button className="navbar__btn" text="Register"></Button>
      </Link>

      <Link to={`/login`}>
        <Button className="navbar__btn" text="Login"></Button>
      </Link>
    </div>
  );
};

export default Navbar;
