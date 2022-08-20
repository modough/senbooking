import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Senbooking</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Inscription</button>
          <button className="navButton">Connexion</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
