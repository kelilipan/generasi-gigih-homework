import Playlist from "./components/playlist";
import data from "./data/playlist";
function App() {
  return (
    <div style={{ padding: "1em" }}>
      <h1 style={{ fontSize: "56px" }}>Create playlist</h1>
      <Playlist data={data} />
    </div>
  );
}

export default App;
