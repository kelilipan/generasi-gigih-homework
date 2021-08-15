import { useUser } from "../../lib/useUser";
import SpotifyPlayer from "react-spotify-web-playback";
import { useTracklist } from "../../lib/useTracklist";
import { Box } from "@chakra-ui/react";

const Player = () => {
  const { accessToken } = useUser();
  const { isPlaying, playedTrack } = useTracklist();
  return (
    <Box pos="fixed" zIndex="modal" w="full" bottom={0}>
      <SpotifyPlayer
        token={accessToken || ""}
        play={isPlaying}
        uris={playedTrack}
        styles={{
          activeColor: "#fff",
          bgColor: "#181818",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1DB954",
          sliderTrackColor: "#535353",
          sliderHandleColor: "#fff",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
      />
    </Box>
  );
};

export default Player;
