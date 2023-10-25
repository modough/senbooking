import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

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

      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        // navigate on homepage "/"
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  return (
    <div className="login">
      <h1>Senbooking</h1>
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
    </div>
  );
};

export default Login;
