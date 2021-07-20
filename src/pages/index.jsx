import { useEffect } from "react";
import { callback } from "../lib/auth";
import Playlist from "../components/playlist";
import data from "../data/playlist";

const Index = () => {
  useEffect(() => {
    callback();
  }, []);
  return (
    <div style={{ padding: "1em" }}>
      <h1 style={{ fontSize: "56px" }}>Create playlist</h1>
      <Playlist data={data} />
    </div>
  );
};

export default Index;
