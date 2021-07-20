import Button from "../button";
import style from "./style.module.css";
import { FaSpotify } from "react-icons/fa";
import { redirect } from "../../lib/auth";
const Navbar = () => {
  return (
    <div className={style.navbar}>
      <Button
        onClick={() => redirect()}
        leftIcon={<FaSpotify fontSize="20px" />}
        style={{ marginLeft: "auto" }}
      >
        Login With Spotify
      </Button>
    </div>
  );
};

export default Navbar;
