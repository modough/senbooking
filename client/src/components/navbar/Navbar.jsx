import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Logout from "../../pages/logout/Logout";

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
          <div className="navItems">
            <div className="username">Bienvenue {user.username}</div>
            <Logout />
          </div>
        ) : (
          <div className="navItems">
            <Link
              to="/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button type="button" className="navButton">
                Inscription
              </button>
            </Link>
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button type="button" className="navButton">
                Connexion
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
