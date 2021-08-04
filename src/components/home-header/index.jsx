import { FaSpotify } from "react-icons/fa";
import { useUser } from "../../lib/useUser";
import { Button } from "@chakra-ui/react";
import style from "./style.module.css";
const Header = () => {
  const { redirect } = useUser();
  return (
    <div className={style.container}>
      <div className={style.textWrapper}>
        <h1 className={style.title}>Lorem ipsum?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure odio
          possimus praesentium, suscipit quae repellat quidem sint itaque at
          totam. Provident veniam consequatur commodi nemo quae dolores ratione
          aliquam. Nostrum!
        </p>
        <div>
          <Button
            onClick={() => redirect()}
            leftIcon={<FaSpotify fontSize="20px" />}
          >
            Login With Spotify
          </Button>
        </div>
      </div>
      <div className={style.videoWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/tiNzdJEb6Ig?modestbranding=1&autohide=1&showinfo=0&controls=0&autoplay=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Sepotify"
        />
      </div>
    </div>
  );
};

export default Header;
