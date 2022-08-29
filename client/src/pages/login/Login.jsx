import axios from "axios";
import { Fragment, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "undefined",
    password: "undefined",
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  // navigate on routes
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      // navigate on homepage "/"
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  return (
    <Fragment>
      <div className="logNav">
        <div className="log h1">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>Senbooking </h1>
          </Link>
        </div>
        <div className="language">
          <LanguageOutlinedIcon className="icon" />
          Français
        </div>
      </div>
      <div className="login">
        <div className="lContainer">
          <input
            type="text"
            placeholder="username"
            id="username"
            className="lInput"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            className="lInput"
            onChange={handleChange}
          />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Connexion
          </button>
          {error && <span>{error.message}</span>}
        </div>
        <Link
          to="/"
          className="loginParagraph"
          style={{ textDecoration: "none" }}
        >
          <div className="divider"></div>
          <span>Cliquez ici pour vous enregistrer en page d'accueil !</span>
          <div className="divider"></div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Login;
