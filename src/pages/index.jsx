import { useEffect, useState } from "react";
import { callback } from "../lib/auth";
import Playlist from "../components/playlist";
import Navbar from "../components/navbar";
import initData from "../data/playlist";
import Main from "../layout/main";
import { getProfile, getSearchTrack } from "../lib/spotify";

const Index = () => {
  const [trackList, setTrackList] = useState(initData);
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const payload = callback();
    if (payload) {
      setAuth(payload);
      getProfile(payload.access_token).then((res) => {
        setUserData(res);
      });
    }
  }, []);
  const handleSearch = (query) => {
    const options = {
      q: query,
      type: "track",
      limit: 12,
    };
    getSearchTrack(auth.access_token, options).then((res) => {
      setTrackList(res.tracks.items);
    });
  };
  return (
    <>
      <Navbar userData={{ ...userData, ...auth }} handleSearch={handleSearch} />
      <Main>
        <h1 style={{ fontSize: "56px" }}>Create playlist</h1>
        <Playlist data={trackList} />
      </Main>
    </>
  );
};

export default Index;
