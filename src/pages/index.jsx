import { useEffect, useState } from "react";
import Playlist from "../components/playlist";
import Navbar from "../components/navbar";
import initData from "../data/playlist";
import Main from "../layout/main";
import { getProfile, getSearchTrack } from "../lib/spotify";
import { useUser } from "../lib/useUser";
import { useDispatch } from "react-redux";
import { login, storeUserData } from "../store/user";

const Index = () => {
  const [trackList, setTrackList] = useState(initData);
  const [isLoading, setIsloading] = useState(false);
  const { isAuthenticated, accessToken, callback } = useUser();
  const dispatch = useDispatch();

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

  useEffect(() => {
    //check if user not authenticated then read access_token from hash url
    if (!isAuthenticated && window.location.hash) {
      const { access_token } = callback();
      if (access_token) {
        dispatch(login(access_token));
        //if access_token is valid, try to get userData using spotify api
        getProfile(access_token).then((res) => {
          dispatch(storeUserData(res));
        });
      }
    }
  }, [dispatch, callback, isAuthenticated]);
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
