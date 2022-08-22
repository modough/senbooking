import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  // we want to use the user on the navbar
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Senbooking</span>
        </Link>
        {user ? (
          <div className="username">Bienvenue {user.username}</div>
        ) : (
          <div className="navItems">
            <button className="navButton">Inscription</button>
            <button className="navButton">Connexion</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
