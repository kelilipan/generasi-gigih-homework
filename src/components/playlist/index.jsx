import { usePlaylist } from "../../lib/usePlaylist";
import MusicCard from "../music-card";
const Playlist = ({ data }) => {
  const { checkSelected, handleSelect } = usePlaylist();
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
    </div>
  );
};

export default Playlist;
