import Button from "../button";
import style from "./style.module.css";
import { FaSpotify } from "react-icons/fa";
import SearchBar from "../search-bar";
import Profile from "../profile";
import { useUser } from "../../lib/useUser";
const Navbar = ({ handleSearch, isLoading }) => {
  const { isAuthenticated, user, redirect } = useUser();
  return (
    <div className={style.navbar}>
      {isAuthenticated ? (
        <>
          <SearchBar isLoading={isLoading} handleSearch={handleSearch} />
          <Profile userData={user} />
        </>
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
