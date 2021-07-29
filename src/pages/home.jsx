import Main from "../layout/main";
import { login, storeUserData } from "../store/user";
import { getProfile } from "../lib/spotify";
import { useUser } from "../lib/useUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/home-header";

const Home = () => {
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
    <Main>
      <Header />
    </Main>
  );
};

export default Home;
