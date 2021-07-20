import Button from "../button";
import style from "./style.module.css";
import { FaSpotify } from "react-icons/fa";
import { redirect } from "../../lib/auth";
import SearchBar from "../search-bar";
const Navbar = ({ userData, handleSearch }) => {
  const isAuthenticated = userData?.access_token !== undefined;
  return (
    <div className={style.navbar}>
      {isAuthenticated ? (
        <SearchBar handleSearch={handleSearch} />
      ) : (
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
