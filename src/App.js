import MusicCard from "./components/music-card";
import data from "./data/playlist";
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create playlist</h1>
      <div className="playlistContainer">
        <MusicCard data={data} />
      </div>
    </div>
  );
}

export default App;
