import Button from "../button";
import style from "./style.module.css";
import { FaSpotify } from "react-icons/fa";
import { redirect } from "../../lib/auth";
const Navbar = ({ auth }) => {
  const isAuthenticated = auth?.access_token !== undefined;
  return (
    <div className={style.navbar}>
      {!isAuthenticated && (
        <Button
          onClick={() => redirect()}
          leftIcon={<FaSpotify fontSize="20px" />}
          style={{ marginLeft: "auto" }}
        >
          Login With Spotify
        </Button>
      )}
    </div>
  );
};

export default Navbar;
