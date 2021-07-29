import { useEffect } from "react";
import Tracklist from "../components/tracklist";
import Main from "../layout/main";
import { getProfile } from "../lib/spotify";
import { useUser } from "../lib/useUser";
import { useDispatch } from "react-redux";
import { login, storeUserData } from "../store/user";

const Index = () => {
  const { isAuthenticated, callback } = useUser();
  const dispatch = useDispatch();

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
      <Main>
        <h1 style={{ fontSize: "44px" }}>Select tracks</h1>
        <Tracklist />
      </Main>
    </>
  );
};

export default Index;
