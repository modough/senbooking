import axios from "axios";
import cookie from "js-cookie";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

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
    <li onClick={logout}>
      <ExitToAppIcon className="icon" />
      <span>Déconnexion</span>
    </li>
  );
};

export default Logout;
