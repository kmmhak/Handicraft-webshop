import { Link } from "react-router-dom";
import "./Components.css";
import Button from "./UI_components/Button";
import { useUser } from "../contexts/UserContext";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  const { loggedIn, currentUser, logout } = useUser();

  return (
    <div className="navbar">
      <Link to={`/`}>
        <Button className="navbar__btn" text="Home"></Button>
      </Link>

      <Link to={`/listings`}>
        <Button className="navbar__btn" text="New listing"></Button>
      </Link>
      {loggedIn ? (
        <>
          <Button
            className="navbar__btn"
            text="Logout"
            onClick={logout}
          ></Button>
          <AiOutlineUser className="navbar__user" color="#ffffff" size={28} />
        </>
      ) : (
        <>
          <Link to={`/register`}>
            <Button className="navbar__btn" text="Register"></Button>
          </Link>

          <Link to={`/login`}>
            <Button className="navbar__btn" text="Login"></Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
