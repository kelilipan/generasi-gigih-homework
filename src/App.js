import Playlist from "./components/playlist";
import data from "./data/playlist";
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create playlist</h1>
      <Playlist data={data} />
    </div>
  );
}

export default App;
