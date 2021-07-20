import { useEffect, useState } from "react";
import { callback } from "../lib/auth";
import Playlist from "../components/playlist";
import Navbar from "../components/navbar";
import data from "../data/playlist";
import Main from "../layout/main";

const Index = () => {
  const { auth, setAuth } = useState(false);
  useEffect(() => {
    const payload = callback();
    if (payload) {
      setAuth(payload);
    }
  }, []);
  return (
    <>
      <Navbar auth={auth} />
      <Main>
        <h1 style={{ fontSize: "56px" }}>Create playlist</h1>
        <Playlist data={data} />
      </Main>
    </>
  );
};

export default Index;
