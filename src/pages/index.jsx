import { useState } from "react";
import Playlist from "../components/playlist";
import Navbar from "../components/navbar";
import initData from "../data/playlist";
import Main from "../layout/main";
import { getSearchTrack } from "../lib/spotify";
import { useUser } from "../lib/useUser";

const Index = () => {
  const [trackList, setTrackList] = useState(initData);
  const [isLoading, setIsloading] = useState(false);
  const { accessToken } = useUser();

  const handleSearch = (query) => {
    const options = {
      q: query,
      type: "track",
      limit: 12,
    };
    setIsloading(true);
    getSearchTrack(accessToken, options).then((res) => {
      setTrackList(res.tracks.items);
      setIsloading(false);
    });
  };
  return (
    <>
      <Navbar isLoading={isLoading} handleSearch={handleSearch} />
      <Main>
        <h1 style={{ fontSize: "44px" }}>Select tracks</h1>
        <Playlist data={trackList} />
      </Main>
    </>
  );
};

export default Index;
