import axios from "axios";
import cookie from "js-cookie";

const Logout = () => {
  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 });
    }
  };
  const logout = async () => {
    await axios
      .post("/auth/logout")
      .then(() => removeCookie("jwt"))
      .catch((err) => console.log(err));
    window.location = "/login";
  };

  return (
    <button className="navButton" onClick={logout}>
      Déconnexion
    </button>
  );
};

export default Logout;
