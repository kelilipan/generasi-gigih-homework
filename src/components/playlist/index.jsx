import MusicCard from "../music-card";
const Playlist = ({ data }) => {
  return (
    <div className="playlistContainer">
      {data.map((music) => (
        <MusicCard key={music.id} data={music} />
      ))}
    </div>
  );
};

export default Playlist;
