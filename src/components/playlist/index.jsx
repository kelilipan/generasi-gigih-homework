import { FaPlusCircle } from "react-icons/fa";
import { usePlaylist } from "../../lib/usePlaylist";
import Button from "../button";
import MusicCard from "../music-card";
const Playlist = ({ data }) => {
  const { checkSelected, handleSelect, createPlaylist } = usePlaylist();
  return (
    <div className="playlistContainer">
      {data.map((music) => (
        <MusicCard
          key={music.id}
          data={music}
          handleSelect={handleSelect}
          isSelected={checkSelected(music.uri)}
        />
      ))}
      <div style={{ position: "fixed", bottom: 18, right: 18 }}>
        <Button leftIcon={<FaPlusCircle />} onClick={createPlaylist}>
          Create playlist
        </Button>
      </div>
    </div>
  );
};

export default Playlist;
