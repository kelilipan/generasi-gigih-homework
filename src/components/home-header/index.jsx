import { FaSpotify } from "react-icons/fa";
import { useUser } from "../../lib/useUser";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import style from "./style.module.css";
const Header = () => {
  const { redirect } = useUser();
  return (
    <div className={style.container}>
      <div className={style.textWrapper}>
        <Heading as="h1" fontSize="4xl">
          Lorem ipsum?
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure odio
          possimus praesentium, suscipit quae repellat quidem sint itaque at
          totam. Provident veniam consequatur commodi nemo quae dolores ratione
          aliquam. Nostrum!
        </Text>
        <Box mt="4">
          <Button
            onClick={() => redirect()}
            leftIcon={<FaSpotify fontSize="20px" />}
          >
            Login With Spotify
          </Button>
        </Box>
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
